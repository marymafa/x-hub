import React, { useState, useEffect } from "react";
import Upload from "./upload";
import { DashContainer, BtmNav } from "./styled-components";
import Nav from "./nav";
import Feeds from "./feed";
import Video from "./video-player";
import { Feed } from "./styled-components";
import BottomNav from "./bottom-nav";

const Dashboard = () => {
  const [articles, addArticle] = useState([
    {article:"jfs",comments:[{user:"mark", comment:"Great article"},{user:"johannes", comment:"I like this article"}]},
    {article:"flasdkjf",comments:[{user:"sabelo", comment:"Great article"},{user:"mary", comment:"I like this article"}]},
    {article:"fjalsfj",comments:[{user:"cindy", comment:"Great article"},{user:"moral", comment:"I like this article"}]},
    {article:"fjasdlfjs",comments:[{user:"vuyisile", comment:"Great article"},{user:"thisIsUs", comment:"I like this article"}]},
  ]);
  const [videos, addVideo] = useState([
    "https://www.facebook.com/codefest.eu/videos/1986525778043373/",
    "https://www.facebook.com/265443537559860/videos/241731859877064/?v=241731859877064",
    "https://www.facebook.com/thepetcollective/videos/1978359252414782/"
  ]);
  useEffect(() => {
    console.log("scrolled");
    window.scrollTo(100, 0);
  });
  return (
    <div>
      <DashContainer>
        <Nav />
        <Feed>
          {/* {(function() {
            // body of the function
            var list = [];
          })()} */}

          {articles.map(x => (
            <Feeds comments={x} />
          ))}
          {videos.map(x => (
            <Video url={x} />
          ))}
        </Feed>
        <BottomNav />
      </DashContainer>
    </div>
  );
};

export default Dashboard;
