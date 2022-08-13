import type { Question } from "../declarations";

export const QuestionField = ({
  question,
  id,
  rightanswer,
  wronganswers,
}: Question) => {
  const allAnswers = [...wronganswers, rightanswer];
  // const options = { rightanswer, ...wronganswers }.map((x) => (
  //   <>
  //     <input type="radio" id={x}>
  //       {x}
  //     </input>
  //     <label htmlFor={x}>{x}</label>
  //   </>
  // ));
  const options = allAnswers.map((answer) => (
    <>
      <input type="radio" id={answer} />
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
