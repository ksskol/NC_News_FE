import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-nav">
        <button>Account</button>
          <Link to={`/`} className="link">
            <h2>NC News</h2>
          </Link>
      </div>
    </header>
  );
}
