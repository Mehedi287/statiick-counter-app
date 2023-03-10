import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Loeading from "../ui/Loeading";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, error, isLoeading, isError } = useSelector(
    (state) => state.tags
  );
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
      {tags.map((tag) => (
        <Tag title={tag.title} key={tag.id} />
      ))}
    </div>
  ) : null;
};

export default Tags;
