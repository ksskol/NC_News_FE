import { useState } from "react";
import { deleteComment } from "../../../api";

export default function DeleteComment({
  comment_id,
  username,
  setComments,
  authors,
}) {
  const [error, setIsError] = useState(false);

  function handleDeleteComment() {
    deleteComment(comment_id)
      .then(() => {
        setComments((current) => {
          const updatedComments = current.filter(
            (comment) => comment.comment_id !== comment_id
          );
          return updatedComments;
        });
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  const isAuthor = authors.includes(username);

  if (isAuthor) {
    return (
      <div>
        <button onClick={handleDeleteComment}>Delete comment</button>
        {error ? <p>Sorry, there was a problem deleting the comment.</p> : null}
      </div>
    );
  } else {
    return null;
  }
}
