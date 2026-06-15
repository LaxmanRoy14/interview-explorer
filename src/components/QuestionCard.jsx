import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

function QuestionCard({ question, onDelete }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  function handleFavorite() {
    const exists = favorites.find((item) => item.id === question.id);

    if (exists) {
      toast.info("Already in Favorites");
      return;
    }

    dispatch(addFavorite(question));

    toast.success("Added to Favorites");
  }

  return (
    <div className="question-card">
      <div className="card-header">
        <span className="category-badge">{question.category}</span>

        <span
          className={`difficulty-badge ${question.difficulty.toLowerCase()}`}
        >
          {question.difficulty}
        </span>
      </div>

      <h3>{question.question}</h3>

      <button className="favorite-btn" onClick={handleFavorite}>
        <>
          <FaHeart />
          <span>Add To Favorites</span>
        </>
      </button>

      <div className="card-actions">
        <Link className="view-btn" to={`/question/${question.id}`}>
          View
        </Link>

        <Link className="edit-btn" to={`/edit-question/${question.id}`}>
          Edit
        </Link>

        <button className="delete-btn" onClick={() => onDelete(question.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
