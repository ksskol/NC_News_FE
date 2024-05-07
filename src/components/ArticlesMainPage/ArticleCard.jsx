export default function ArticleCard({ article }) {
  const { created_at } = article;
  const time = created_at.slice(11, 16);
  const date =
    created_at.slice(8, 10) +
    "/" +
    created_at.slice(5, 7) +
    "/" +
    created_at.slice(0, 4);

  return (
    <article>
      <div className="article-text">
        <img src={article.article_img_url} />
        <p className="author">Author: {article.author}</p>
        <p>Category: {article.topic}</p>
        <h2>{article.title}</h2>
      </div>

      <div className="metadata ">
        <footer>
          <p class="votes">❤ {article.votes}</p>
          <p>
            {date} {time}
          </p>
        </footer>
      </div>
    </article>
  );
}
