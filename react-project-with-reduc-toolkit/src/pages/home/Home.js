import React from "react";
import Nabvar from "./../../components/navbar/Nabvar";
import Tags from "./../../components/tags/Tags";
import VideoGrid from "./../../components/grid/VideoGrid";
import Pagination from "./../../components/pagination/Pagination";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <!-- navigation --> */}

      {/* <!-- Tags --> */}
      <section>
        <Tags />
      </section>

      {/* <!-- Video Grid --> */}
      <section className="pt-12">
        <VideoGrid />
      </section>

      {/* <!-- pagination--> */}
      <section className="pt-12">
        <Pagination />
      </section>

      {/* <!-- footer --> */}
    </div>
  );
};

export default Home;
