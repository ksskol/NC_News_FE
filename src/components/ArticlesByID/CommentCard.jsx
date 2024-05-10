import { formatDate, formatTime } from "../../use";
import DeleteComment from "./DeleteComment";

export default function CommentsCard({ setComments, comment, username }) {
  const formattedDate = formatDate(comment.created_at);
  const formattedTime = formatTime(comment.created_at);
  return (
    <div className="comment-card">
      <section className="comment">
        <p className="time">
          {formattedTime} {formattedDate}
        </p>
        <p className="comment-author">Comment by: {comment.author}</p>
        <p className="comment-body">{comment.body}</p>
        <div id="delete-comment-card">
        <DeleteComment
          comment_id={comment.comment_id}
          setComments={setComments}
          username={username}
          authors={comment.author}
        />
        </div>
      </section>
    </div>
  );
}
