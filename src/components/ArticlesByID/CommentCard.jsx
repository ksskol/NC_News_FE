import { formatDate, formatTime } from "../../use";

export default function CommentsCard({ comment }) {
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
      </section>
    </div>
  );
}
