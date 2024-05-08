import { useState } from "react";
import { useParams } from "react-router";
import { postComment } from "../../../api";

export default function PostCommentForm({ setComments }) {
  const [isValidForm, setIsValidForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [isError, setIsError] = useState(false);

  const { article_id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    setIsError(false);

    !e.target[0].value
      ? setIsValidForm(false)
      : (() => {
          const commentInfo = {
            username: "grumpy19",
            body: e.target[0].value,
          };
          setIsLoading(true);
          postComment(commentInfo, article_id)
            .then(({ data }) => {
              setIsLoading(false);
              setCommentInput("");
              setComments((existingComments) => [
                data.comment,
                ...existingComments,
              ]);
            })
            .catch(() => {
              setIsLoading(false);
              setIsError(true);
            });
        })();
  }

  function handleChange(e) {
    setIsValidForm(true);
    setCommentInput(e.target.value);
  }
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {isLoading ? <h3>Posting your comment...</h3> : <h3>Add comment</h3>}
      <textarea
        className="comment-input"
        placeholder="Type here..."
        autoComplete="off"
        disabled={isLoading}
        value={commentInput}
        onChange={handleChange}
      ></textarea>
      <button id="post-button" className="comment-button">
        Post
      </button>
      {!isValidForm ? (
        <p className="comment-error" id="write-something">
          Please write something before posting.
        </p>
      ) : null}
      {isError ? (
        <p className="comment-error" id="post-failed">
          Comment failed to post. Please try again.
        </p>
      ) : null}
    </form>
  );
}
