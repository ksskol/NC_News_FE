import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesMainPage/ArticlesList";

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </main>
  );
}
