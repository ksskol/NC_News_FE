import { useState, useEffect } from "react";
import { getArticles } from "../../../api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div class="loader-container">
      <div class="loader"></div>
    </div>
  ) : (
    <section>
      <div className="filter">
        <select>
          <option value="all">All News</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
      </div>
      <ul className="articles-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
}
