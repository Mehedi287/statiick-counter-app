import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../features/video/videoSlice";
import Loeading from "../ui/Loeading";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoeading, isError, error } = useSelector(
    (state) => state.videos
  );
  useEffect(() => {
    dispatch(fetchVideo());
  }, [dispatch]);
  // decided rander
  let content;
  if (isLoeading) {
    content = <Loeading />;
  }
  if (!isLoeading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isError && !isLoeading && videos?.length === 0) {
    <div className="col-span-12">NO video Found</div>;
  }
  if (!isError && !isLoeading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }
  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {/* <!-- single video --> */}
        {content}

        {/* <!-- error section */}
        {/* <div className="col-span-12">some error happened</div> --> */}
      </div>
    </section>
  );
};

export default VideoGrid;
