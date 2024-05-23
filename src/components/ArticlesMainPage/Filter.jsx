import { useEffect, useState } from "react";
import { getCategories } from "../../../api";

export default function Filter({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    getCategories().then((response) => {
      const data = response.data.topics;
      const topics = [...new Set(data.map((val) => val.slug))];
      setCategories(topics);
    });
  }, []);

  return (
    <div className="filter">
      <select
        value={currentCategory}
        onChange={(event) => {
          const selectedCategory = event.target.value;
          setSelectedCategory(selectedCategory);
          setCurrentCategory(selectedCategory);
        }}
      >
        <option value="all">{currentCategory === "all" ? "all news" : currentCategory}</option>
        {categories.map((slug, index) => (
          <option value={slug} key={index}>
            {slug}
          </option>
        ))}
      </select>
    </div>
  );
}
