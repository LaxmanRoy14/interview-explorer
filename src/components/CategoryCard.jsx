import { Link } from "react-router-dom";

import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.webp";
import dsaImg from "../assets/dsa.png";
import hrImg from "../assets/hr.png";

function CategoryCard({ category }) {

  const categoryImages = {
    Frontend: frontendImg,
    Backend: backendImg,
    DSA: dsaImg,
    HR: hrImg,
  };

  return (
    <div className="card">
      <img
        src={categoryImages[category.name]}
        alt={category.name}
        className="category-image"
      />

      <h3>{category.name}</h3>

      <p>{category.questionsCount} Questions</p>

      <Link to={`/interview/${category.name}`}>
        Start Interview
      </Link>
    </div>
  );
}

export default CategoryCard;