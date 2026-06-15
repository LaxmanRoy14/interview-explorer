import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favoriteSlice";
import { toast } from "react-toastify";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeFavorite(id));
    toast.success("Removed from Favorites");
  }

  return (
    <div className="favorites-container">
      <h1 className="page-title">Favorite Questions</h1>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>No Favorite Questions</h2>

          <p>Add questions from the Interview page.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((question) => (
            <div className="favorite-card" key={question.id}>
              <div className="favorite-content">
                <h2>{question.question}</h2>

                <p>
                  <strong>Category:</strong> {question.category}
                </p>

                <p>
                  <strong>Difficulty:</strong> {question.difficulty}
                </p>
              </div>

              <div className="favorite-actions">
                <Link className="view-btn" to={`/question/${question.id}`}>
                  View Answer
                </Link>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(question.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
