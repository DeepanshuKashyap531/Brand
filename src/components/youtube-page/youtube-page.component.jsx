import React, { useState } from "react";
import "./youtube-page.styles.scss";
import dt3 from '../../asstes/logo/dt3.png'
const videoData = [
  {
    category: "vlogging",
    title: "I SPENT A DAY EXPLORING Venice Shopping Market Streets and Found Hidden Gems!",
    url: "https://www.youtube.com/embed/tQWF6Ale3DI"
  },
  {
    category: "vlogging",
    title: "Discover Ischia Island, Italy | Thermal Spas of Negombo | Aragonese Castle",
    url: "https://www.youtube.com/embed/D1_sTgYrswA"
  },
   {
    category: "vlogging",
    title: "Naples Walking Tour Ancient market place | Famous places | old church's walk through",
    url: "https://www.youtube.com/embed/4FAifH6wdr8"
  },
  {
    category: "vlogging",
    title: "Naples Street Walk Tour - The Most Bizarre and Beautiful Italian City ",
    url: "https://www.youtube.com/embed/_8_oispqVxM"
  },
   {
    category: "vlogging",
    title: "Why Budapest Is The Most STUNNING City In Europe?",
    url: "https://www.youtube.com/embed/IIBC8FGb6hQ"
  },
  {
    category: "vlogging",
    title: "Budapest Nightlife 2025 | Best Nightclubs & Party Spots You Must Visit! 🎉🇭🇺 | Series Vlog 4",
    url: "https://www.youtube.com/embed/KQj6U0vCnww"
  },
  {
    category: "students and conustation",
    title: "SPID for Indian Students: Everything You Need to Know in 2024",
    url: "https://www.youtube.com/embed/mQ0NvblXf1I"
  },
  {
    category: "students and conustation",
    title: "Italy's Secret Tax Code - A Guide for Students",
    url: "https://www.youtube.com/embed/rXZnBxEXIZk"
  },
    {
    category: "students and conustation",
    title: "7 Reasons Italy is the Best Place to Study Abroad",
    url: "https://www.youtube.com/embed/YL7EjGCpDAw"
  },
];

const YoutubePage = () => {
  const [category, setCategory] = useState("all");

  const filteredVideos =
    category === "all"
      ? videoData
      : videoData.filter((video) => video.category === category);

  return (

    <div className="video-gallery">
      {/* Navbar */}
      <nav class="sky-nav">
        <div class="sky-flexbox">
            <a href="/" class="brand-anchor">
            <img src={dt3} alt="Company Logo" class="brand-symbol" />
            </a>
            <a href="/" class="go-back-link">
            <i class="fas fa-arrow-left"></i> Back
            </a>
        </div>
        </nav>

      <div className="container2">
        <h1>Video Categories</h1>

        <div className="category-buttons2">
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("vlogging")}>Vlogging</button>
          <button onClick={() => setCategory("students and conustation")}>students and conustation</button>
        </div>

        <div className="content-wrapper">
          {/* Featured Video */}

          {/* Video List */}
          <div className="videos-section">
            {filteredVideos.map((video, index) => (
              <div className={`video-card ${video.category}`} key={index}>
                <h3>{video.title}</h3>
                <div className="video-wrapper">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default YoutubePage;
