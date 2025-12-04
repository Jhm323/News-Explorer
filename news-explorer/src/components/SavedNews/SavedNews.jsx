// import React from "react";
// import "./SavedNews.css";
// import NewsCard from "../NewsCard/NewsCard";

// function SavedNews({ savedArticles, onDeleteArticle, currentUser }) {
//   const savedArticlesCount = savedArticles.length;

//   // Get unique keywords from saved articles
//   const getKeywords = () => {
//     const keywords = savedArticles.map((article) => article.keyword);
//     const uniqueKeywords = [...new Set(keywords)];

//     if (uniqueKeywords.length <= 2) {
//       return uniqueKeywords.join(" and ");
//     } else if (uniqueKeywords.length === 3) {
//       return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${uniqueKeywords[2]}`;
//     } else {
//       return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${
//         uniqueKeywords.length - 2
//       } others`;
//     }
//   };

//   return (
//     <main className="saved-news">
//       <section className="saved-news__header">
//         <div className="saved-news__container">
//           <p className="saved-news__subtitle">Saved articles</p>
//           <h1 className="saved-news__title">
//             {currentUser?.name || "User"}, you have {savedArticlesCount} saved{" "}
//             {savedArticlesCount === 1 ? "article" : "articles"}
//           </h1>
//           {savedArticlesCount > 0 && (
//             <p className="saved-news__keywords">
//               By keywords:{" "}
//               <span className="saved-news__keywords-list">{getKeywords()}</span>
//             </p>
//           )}
//         </div>
//       </section>

//       <section className="saved-news__cards">
//         <div className="saved-news__container">
//           {savedArticlesCount === 0 ? (
//             <div className="saved-news__no-articles">
//               <p className="saved-news__no-articles-text">
//                 You haven't saved any articles yet. Start browsing to save
//                 articles you'd like to read later.
//               </p>
//             </div>
//           ) : (
//             <div className="saved-news__cards-grid">
//               {savedArticles.map((article) => (
//                 <NewsCard
//                   key={article._id || article.url}
//                   article={article}
//                   onDeleteArticle={onDeleteArticle}
//                   isSaved={true}
//                   showDeleteButton={true}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default SavedNews;

import React from "react";
import "./SavedNews.css"; // if you have styles

function SavedNews() {
  return <main className="saved-news">{/* saved news content */}</main>;
}

export default SavedNews;
