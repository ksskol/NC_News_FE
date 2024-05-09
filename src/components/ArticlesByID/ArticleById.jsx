import { useParams } from "react-router";
import { getArticleById } from "../../../api";
import { useEffect, useState } from "react";
import { formatDate, formatTime } from "../../use";
import Comments from "./CommentsList";
import Votes from "./Votes";

export default function ArticleById() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  const formattedDate = article ? formatDate(article.created_at) : "";
  const formattedTime = article ? formatTime(article.created_at) : "";

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="page-by-article-id">
    <article className="article-by-id">
      <div className="article-text">
        <p className="time">
          {formattedTime} {formattedDate}
        </p>
        <div className="info">
          <p>Author: {article.author}</p>
          <p>Category: {article.topic}</p>
        </div>
        <img className="img-by-id" src={article.article_img_url} />

        <h2>{article.title}</h2>
        <p className="body">{article.body}</p>
      </div>

      <div className="metadata ">
        <footer>
          <Votes votes={article.votes} article_id={article_id} />
        </footer>
      </div>
    </article>
      <Comments article_id={article_id}/>
      </div>
  );
}
