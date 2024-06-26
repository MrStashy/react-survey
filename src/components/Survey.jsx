/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

  const [formData, setFormData] = useState({
    review: "",
    color: "",
    email: "",
    "spend-time": [],
    username: "",
  });
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <section className="survey__form">
        <Form setAnswersList={setAnswersList} answersList={answersList} formData={formData} setFormData={setFormData} />
      </section>
    </main>
  );
}

export default Survey;
