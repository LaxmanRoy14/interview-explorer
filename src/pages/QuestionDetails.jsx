import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function QuestionDetails() {
  const { id } = useParams();

  const [question, setQuestion] =
    useState(null);

  useEffect(() => {
    getQuestion();
  }, []);

  async function getQuestion() {
    try {
      const response = await api.get(
        `/questions/${id}`
      );

      setQuestion(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!question) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <h1>{question.question}</h1>

      <h3>Category</h3>
      <p>{question.category}</p>

      <h3>Difficulty</h3>
      <p>{question.difficulty}</p>

      <h3>Answer</h3>
      <p>{question.answer}</p>
    </div>
  );
}

export default QuestionDetails;