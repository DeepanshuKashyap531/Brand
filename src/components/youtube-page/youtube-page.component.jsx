import React, { useState } from "react";
import "./youtube-page.styles.scss";
import dt3 from '../../asstes/logo/dt3.png'
const videoData = [
  {
    category: "vlogging",
    title: "🎵 Vlogging Video 1",
    url: "https://www.youtube.com/embed/jfKfPfyJRdk"
  },
  {
    category: "vlogging",
    title: "🎵 Vlogging Video 2",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g"
  },
  {
    category: "sports",
    title: "⚽ Sports Video 1",
    url: "https://www.youtube.com/embed/21X5lGlDOfg"
  },
  {
    category: "sports",
    title: "🏀 Sports Video 2",
    url: "https://www.youtube.com/embed/8Qn_spdM5Zg"
  },
  {
    category: "education",
    title: "📘 Education Video 1",
    url: "https://www.youtube.com/embed/5MgBikgcWnY"
  },
   {
    category: "education",
    title: "📘 Education Video 1",
    url: "https://www.youtube.com/embed/5MgBikgcWnY"
  },
   {
    category: "education",
    title: "📘 Education Video 3",
    url: "https://www.youtube.com/embed/5MgBikgcWnY"
  },
  {
    category: "education",
    title: "📗 Education Video 4",
    url: "https://www.youtube.com/embed/UNP03fDSj1U"
  }
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
          <button onClick={() => setCategory("sports")}>Gaming</button>
          <button onClick={() => setCategory("education")}>Education</button>
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
