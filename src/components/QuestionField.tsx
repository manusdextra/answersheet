import type { Question } from "../declarations";
import { AnswerField } from "./AnswerField";

export const QuestionField = ({
  question,
  id,
  rightanswer,
  wronganswers,
}: Question) => {
  const allAnswers = [...wronganswers, rightanswer].sort(
    () => Math.random() - 0.5
  );
  const idString = `question-${id}`;
  return (
    <fieldset
      key={idString}
      className="m-auto my-6 rounded-md bg-slate-50 shadow-lg sm:w-full md:w-[80vw]"
    >
      <div className="text-md rounded-t-md bg-gray-100 py-4 text-center">
        <legend>{question}</legend>
      </div>
      <div className="grid grid-flow-row p-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {allAnswers.map((answer) => (
          <AnswerField optionText={answer} key={answer} />
        ))}
      </div>
    </fieldset>
  );
};
