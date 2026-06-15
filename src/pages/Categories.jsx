import { useEffect, useState } from "react";
import api from "../services/api";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const [categoriesRes, questionsRes] = await Promise.all([
        api.get("/categories"),
        api.get("/questions"),
      ]);

      const updatedCategories = categoriesRes.data.map((category) => {
        const count = questionsRes.data.filter(
          (q) => q.category.toLowerCase() === category.name.toLowerCase(),
        ).length;

        return {
          ...category,
          questionsCount: count,
        };
      });

      setCategories(updatedCategories);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Interview Categories</h1>

      <div className="categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}

export default Categories;
