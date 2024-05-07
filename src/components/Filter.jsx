import { useEffect, useState } from "react";
import { getCategories } from "../../api";

export default function Filter({ setCategory }) {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories.data.topics);
    });
  }, []);

  return (
    <div className="filter">
       <select
        value={currentCategory}
        onChange={(event) => {
          setCategory(event.target.value);
          setCurrentCategory(event.target.value);
        }}
      >
        <option value="all">all items</option>
        {categories.map((topics, index) => {
          return (
            <option value={topics.slug} key={index}>
              {topics.slug}
            </option>
          );
        })}
      </select>
    </div>
  );
}
