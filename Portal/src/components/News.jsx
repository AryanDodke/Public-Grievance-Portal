// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiKey = '43504620f32a4299832cb4b43c34a569'; // Replace with your actual News API key
// const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// function News() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get(apiUrl)
//       .then((response) => {
//         // Limit the number of news articles to the top 4
//         const top4News = response.data.articles.slice(0, 4);
//         setNews(top4News);
//       })
//       .catch((error) => {
//         console.error('Error fetching news:', error);
//       });
//   }, []);

//   return (
//     <div className="news-container">
//       <h2 className="news-title">Latest News</h2>
//       <div className="news-card-container">
//         {news.map((article) => (
//           <div key={article.title} className="news-card">
//             <img
//               src={article.urlToImage}
//               alt={article.title}
//               className="news-image"
//             />
//             <div className="news-content">
//               <a
//                 href={article.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="news-link"
//               >
//                 {article.title}
//               </a>
//               <p className="news-description">{article.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default News;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/news.css'; // Import the CSS file

const apiKey = '43504620f32a4299832cb4b43c34a569'; // Replace with your actual News API key
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // Limit the number of news articles to the top 4
        const top4News = response.data.articles.slice(0, 4);
        setNews(top4News);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-title">Latest News</h2>
      <div className="news-card-container">
        {news.map((article) => (
          <div key={article.title} className="news-card">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="news-image"
            />
            <div className="news-content">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                {article.title}
              </a>
              <p className="news-description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
