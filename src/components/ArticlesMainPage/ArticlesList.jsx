import { useState, useEffect } from "react";
import { getArticles } from "../../../api";
import ArticleCard from "./ArticleCard";
import Filter from "./Filter";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setIsLoading(true);
    getArticles(selectedCategory).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [selectedCategory]);

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <section>
      <Filter setSelectedCategory={setSelectedCategory} />
      <ul className="articles-list">
      {articles.map((article) => {
          if (article.topic === selectedCategory || selectedCategory === "all") {
            return <ArticleCard key={article.article_id} article={article} />;
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}
