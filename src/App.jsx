import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesMainPage/ArticlesList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <main>
      <Header />
      <Filter />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
    </main>
  );
}
