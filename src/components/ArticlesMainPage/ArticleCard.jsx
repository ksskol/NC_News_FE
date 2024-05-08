import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../../use";

export default function ArticleCard({ article }) {
  const formattedDate = formatDate(article.created_at);
  const formattedTime = formatTime(article.created_at);

  const articleId = article.article_id;

  return (
    <article>
      <div className="article-text">
        <p className="author">Author: {article.author}</p>
        <img src={article.article_img_url} />
        <p className="category">Category: {article.topic}</p>
        <Link to={`/articles/${articleId}`} className="link">
          <h2>{article.title}</h2>
        </Link>
      </div>

      <div className="metadata ">
        <footer>
          <p className="votes"> {article.votes} ❤</p>
          <p>
            {formattedDate} {formattedTime}
          </p>
        </footer>
      </div>
    </article>
  );
}
