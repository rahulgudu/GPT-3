import React from "react";
import { Feature } from "../../components";
import "./feature.css";
const Features = () => {
  const featuresData = [
    {
      title: "Improving and distrusts instantly",
      text: "From they jfb fjfbnvnvfbv vfjvbfjvbf v fbjkfewf dh  vjfbejhvfkjv bvh vjvbhj e vfebvhfv ",
    },
    {
      title: "Become the tended active",
      text: "From they jfb fjfbnvnvfbv vfjvbfjvbf v fbjkfewf dh  vjfbejhvfkjv bvh vjvbhj e vfebvhfv ",
    },
    {
      title: "Message or am nothing",
      text: "From they jfb fjfbnvnvfbv vfjvbfjvbf v fbjkfewf dh  vjfbejhvfkjv bvh vjvbhj e vfebvhfv ",
    },
    {
      title: "Really boy law county",
      text: "From they jfb fjfbnvnvfbv vfjvbfjvbf v fbjkfewf dh  vjfbejhvfkjv bvh vjvbhj e vfebvhfv ",
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and Need To Realize It. Step into Future Today &
          Make it Happen
        </h1>
        <p>Request Early Access to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
