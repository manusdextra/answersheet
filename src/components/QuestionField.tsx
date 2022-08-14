import type { Question } from "../declarations";

export const QuestionField = ({
  question,
  id,
  rightanswer,
  wronganswers,
}: Question) => {
  const allAnswers = [...wronganswers, rightanswer].sort(
    () => Math.random() - 0.5
  );
  const options = allAnswers.map((answer) => (
    <div className="text-md m-2 h-auto rounded-md bg-slate-200 p-4 text-center font-medium hover:bg-slate-400">
      <input type="radio" id={answer} />
      <label htmlFor={answer} className="">
        {answer}
      </label>
    </div>
  ));

  const htmlId = `question-${id}`;

  return (
    <fieldset
      id={htmlId}
      className="m-auto my-6 rounded-md bg-slate-50 shadow-lg sm:w-full md:w-[80vw]"
    >
      <div className="text-md rounded-t-md bg-gray-100 py-4 text-center">
        <legend>{question}</legend>
      </div>
      <div className="grid grid-flow-row p-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {options}
      </div>
    </fieldset>
  );
};
