import type { Question } from "../declarations";

export const QuestionField = ({
  question,
  id,
  rightanswer,
  wronganswers,
}: Question) => {
  const allAnswers = [...wronganswers, rightanswer].sort(() => Math.random() - 0.5);
  const options = allAnswers.map((answer) => (
    <>
      <input type="radio" id={answer} name={question} />
      <label htmlFor={answer}>{answer}</label>
    </>
  ));

  return (
    <fieldset>
      <legend>{question}</legend>
      {options}
    </fieldset>
  );
};
