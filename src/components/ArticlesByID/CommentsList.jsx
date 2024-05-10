import { useContext, useEffect, useState } from "react";
import { getComments } from "../../../api";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";

export default function Comments({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [authors, setAuthors] = useState("");

  useEffect(() => {
    getComments(article_id).then(({ data }) => {
      setUsername("jessjelly");
      setComments(data.comments);
      const authorsUsername = comments.map((comment) => {
        return comment.author;
      });
      setAuthors(authorsUsername);
      setIsLoading(false);
    });
  }, [article_id]);
  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <section>
      <div className="log-comment">
        <PostCommentForm setComments={setComments} username={username} />
      </div>
      <div className="comment-cards">
        {comments.map((comment) => {
          return (
            <CommentCard
              setComments={setComments}
              username={username}
              authors={authors}
              comment={comment}
              key={comment.comment_id}
            />
          );
        })}
      </div>
    </section>
  );
}
