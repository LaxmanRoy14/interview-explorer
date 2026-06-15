import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import QuestionCard from "../components/QuestionCard";
import { Link } from "react-router-dom";

function MockInterview() {
  const { category } = useParams();

  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, difficulty, sort]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  async function getQuestions() {
    try {
      const response = await api.get("/questions");

      const filtered = response.data.filter(
        (q) => q.category.toLowerCase() === category.toLowerCase(),
      );

      setQuestions(filtered);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteQuestion(id) {
    try {
      await api.delete(`/questions/${id}`);

      setQuestions(questions.filter((q) => q.id !== id));
      toast.success("Question Deleted");
    } catch (error) {
      console.log(error);
    }
  }

  const filteredQuestions = questions.filter((q) => {
    const searchMatch = q.question.toLowerCase().includes(search.toLowerCase());

    const difficultyMatch = difficulty === "All" || q.difficulty === difficulty;

    return searchMatch && difficultyMatch;
  });

  let finalQuestions = [...filteredQuestions];

  if (sort === "az") {
    finalQuestions.sort((a, b) => a.question.localeCompare(b.question));
  }

  if (sort === "za") {
    finalQuestions.sort((a, b) => b.question.localeCompare(a.question));
  }

  const indexOfLastQuestion = currentPage * questionsPerPage;

  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

  const currentQuestions = finalQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion,
  );

  const totalPages = Math.ceil(finalQuestions.length / questionsPerPage);

  return (
    <div className="details">
      <div className="page-header">
        <h1>{category} Interview</h1>

        <Link to="/add-question" className="add-btn">
          + Add Question
        </Link>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort Questions</option>

          <option value="az">A-Z</option>

          <option value="za">Z-A</option>
        </select>
      </div>

      {currentQuestions.map((q) => (
        <QuestionCard key={q.id} question={q} onDelete={deleteQuestion} />
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default MockInterview;
