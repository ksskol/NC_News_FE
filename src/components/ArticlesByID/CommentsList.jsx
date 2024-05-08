import { useEffect, useState } from "react";
import { getComments } from "../../../api";
import CommentCard from "./CommentCard";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then(({ data }) => {
      console.log(data.comments);
      setComments(data.comments);
    });
  }, [article_id]);

  return (
    <section>
      <h2>Comments</h2>
      <h3>Log in to add comment.</h3>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </section>
  );
}
