import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function AddQuestion() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    question: "",
    answer: "",
    difficulty: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (
        !formData.category ||
        !formData.question ||
        !formData.answer ||
        !formData.difficulty
      ) {
        alert("Please fill all fields");
        return;
      }
      await api.post("/questions", formData);
      toast.success("Question Added Successfully");

      setTimeout(() => {
        navigate(`/interview/${formData.category}`);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Add Question</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="question"
          placeholder="Question"
          value={formData.question}
          onChange={handleChange}
        />

        <textarea
          name="answer"
          placeholder="Answer"
          value={formData.answer}
          onChange={handleChange}
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="">Select Difficulty</option>

          <option value="Easy">Easy</option>

          <option value="Medium">Medium</option>

          <option value="Hard">Hard</option>
        </select>

        <button type="submit" className="submit-btn">
          Add Question
        </button>
      </form>
    </div>
  );
}

export default AddQuestion;
