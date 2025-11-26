// import React from "react";
// import "./NewsCard.css";

// function NewsCard({
//   article,
//   isSaved = false,
//   onSaveArticle,
//   onDeleteArticle,
//   showDeleteButton = false,
//   isLoggedIn = false,
// }) {
//   const handleSaveClick = () => {
//     if (isSaved) {
//       onDeleteArticle(article);
//     } else {
//       onSaveArticle(article);
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <article className="news-card">
//       <div className="news-card__image-container">
//         <img
//           src={article.urlToImage || "/images/placeholder-image.jpg"}
//           alt={article.title}
//           className="news-card__image"
//         />

//         {showDeleteButton ? (
//           <button
//             className="news-card__delete-button"
//             onClick={handleSaveClick}
//             aria-label="Remove article"
//           >
//             <span className="news-card__delete-icon"></span>
//           </button>
//         ) : (
//           <button
//             className={`news-card__save-button ${
//               isSaved ? "news-card__save-button_active" : ""
//             }`}
//             onClick={handleSaveClick}
//             aria-label={isSaved ? "Remove from saved" : "Save article"}
//           >
//             <span className="news-card__save-icon"></span>
//           </button>
//         )}

//         {showDeleteButton && (
//           <div className="news-card__keyword">{article.keyword}</div>
//         )}

//         {!isLoggedIn && !showDeleteButton && (
//           <div className="news-card__tooltip">Sign in to save articles</div>
//         )}
//       </div>

//       <div className="news-card__content">
//         <time className="news-card__date">
//           {formatDate(article.publishedAt)}
//         </time>
//         <h2 className="news-card__title">{article.title}</h2>
//         <p className="news-card__description">{article.description}</p>
//         <span className="news-card__source">
//           {article.source?.name || "Unknown Source"}
//         </span>
//       </div>

//       <a
//         href={article.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="news-card__link"
//         aria-label="Read full article"
//       >
//         <span className="visually-hidden">Read full article</span>
//       </a>
//     </article>
//   );
// }

// export default NewsCard;
