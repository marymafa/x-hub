import React, { useState, useEffect } from "react";
import Upload from "./upload";
import { DashContainer, BtmNav } from "./styled-components";
import Nav from "./nav";
import Feeds from "./feed";

import { Feed } from "./styled-components";
import BottomNav from "./bottom-nav";

const Dashboard = () => {
  const [articles, addArticle] = useState([
    "jfs",
    "flasdkjf",
    "fjalsfj",
    "fjasdlfjs"
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
          {articles.map(x => (
            <Feeds />
          ))}
        </Feed>
        <BottomNav />
      </DashContainer>
    </div>
  );
};

export default Dashboard;
