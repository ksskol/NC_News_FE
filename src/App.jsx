import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesMainPage/ArticlesList";
import ArticleById from "./components/ArticleById";

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList /> } />
        <Route path="/articles/:article_id" element={<ArticleById />} />
        <Route />
      </Routes>
    </main>
  );
}
