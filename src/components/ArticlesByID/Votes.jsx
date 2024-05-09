import { useState, useEffect } from "react";
import { updateVotesByArticleId } from "../../../api";

function VoteArticle({ article_id, votes }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [voted, setVoted] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const voteStatus = localStorage.getItem(`vote_${article_id}`);
    if (voteStatus) {
      setVoted(true);
    }
  }, [article_id]);

  const handleVoteClick = () => {
    let voteChange = 0;
    if (!voted) {
      voteChange = 1;
      localStorage.setItem(`vote_${article_id}`, "voted");
    } else {
      voteChange = -1;
      localStorage.removeItem(`vote_${article_id}`);
    }
    setVoted((prevVoted) => !prevVoted);
    updateVotesByArticleId(article_id, voteChange).then(() => {
      setVoteCount((prevVoteCount) => prevVoteCount + voteChange);
    }) .catch((error) => {
        setErr("Something went wrong, please try again.");
      });
  };

  const buttonClass = voted ? "liked" : "default";
  const errorClass = err ? "error" : ""; 

  return (
      <div id="article-voting">
      <button
        className={`votes ${buttonClass}`}
        id="vote-button"
        onClick={handleVoteClick}
        >
        {voted ? `❤ ${voteCount}` : `❤ ${voteCount}`}
      </button>
          <p className={errorClass}>{err}</p>
    </div>
  );
}

export default VoteArticle;
