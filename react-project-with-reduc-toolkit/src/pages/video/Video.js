import React from "react";
import Nabvar from "../../components/navbar/Nabvar";
import RelatedVidos from "../../components/videos/RelatedVidos";
import SIngleVIdeo from "../../components/videos/SIngleVIdeo";

const Video = () => {
  return (
    <div>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <SIngleVIdeo />

            {/* <!-- related videos --> */}
            <RelatedVidos />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
