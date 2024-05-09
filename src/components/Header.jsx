import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-nav">
      <Link to={`/login`} className="link">
        <button className="acc-button">Account</button>
        </Link>
          <Link to={`/`} className="link">
            <h2>NC News</h2>
          </Link>
      </div>
    </header>
  );
}
