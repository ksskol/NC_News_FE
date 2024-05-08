import { formatDate, formatTime } from "../../use";

export default function CommentsCard({ comment }) {
  const formattedDate = formatDate(comment.created_at);
  const formattedTime = formatTime(comment.created_at);

  return (
    <section className="comment">
      <p className="time">
        {formattedTime} {formattedDate}
      </p>
      <p>Author:{comment.author}</p>
      <p>{comment.body}</p>

      <p> {comment.votes} ❤</p>
    </section>
  );
}
