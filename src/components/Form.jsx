/* eslint-disable react/prop-types */
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
let timeActivities = [];

export default function Form({ setFormData, formData, answersList, setAnswersList }) {
  
    function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      checked
        ? timeActivities.push(value)
        : timeActivities.splice(timeActivities.indexOf(value), 1);
      setFormData({ ...formData, [name]: timeActivities });
      return;
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(answersList)
    setAnswersList([...answersList, formData])
    setFormData({
      review: "",
      color: "",
      email: "",
      "spend-time": [],
      username: "",
    });
    timeActivities = [];
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio" onChange={handleChange}>
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons formData={formData}/>
      </div>
      <div className="form__group" onChange={handleChange}>
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes timeActivities={timeActivities}/>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          onChange={handleChange}
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={formData.username}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
