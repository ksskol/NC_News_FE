import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesMainPage/ArticlesList";
import ArticleById from "./components/ArticlesByID/ArticleById";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/articles/:article_id" element={<ArticleById />} />
        <Route />
      </Routes>
    </main>
  );
}
