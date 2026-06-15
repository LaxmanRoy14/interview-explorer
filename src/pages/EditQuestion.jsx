import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function EditQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    question: "",
    answer: "",
    difficulty: "",
  });

  useEffect(() => {
    getQuestion();
  }, []);

  async function getQuestion() {
    try {
      const response = await api.get(`/questions/${id}`);

      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
      await api.put(`/questions/${id}`, formData);
      toast.success("Question Updated Successfully");

      setTimeout(() => {
        navigate(`/question/${id}`);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Edit Question</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
        />

        <textarea
          name="answer"
          value={formData.answer}
          onChange={handleChange}
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="Easy">Easy</option>

          <option value="Medium">Medium</option>

          <option value="Hard">Hard</option>
        </select>

        <button type="submit" className="submit-btn">
          Update Question
        </button>
      </form>
    </div>
  );
}

export default EditQuestion;
