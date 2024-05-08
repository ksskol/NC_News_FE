import { useEffect, useState } from "react";
import { getComments } from "../../../api";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";

export default function Comments({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then(({ data }) => {
      setComments(data.comments);
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
        <h3>Log in to add comment.</h3>
        <PostCommentForm setComments={setComments} />
      </div>
      <div className="comment-cards">
      {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />
      })}
        </div>;
    </section>
  );
}
