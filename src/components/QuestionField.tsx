import { FormEvent, useState } from "react";
import type { Question } from "../declarations.d";
import { AnswerField } from "./AnswerField";

export const QuestionField = (props: Question) => {
  const question = props.question;
  const id = props.id;
  const rightanswer = props.rightanswer;
  const wronganswers = props.wronganswers;
  const allAnswers = [...wronganswers, rightanswer].sort(
    () => Math.random() - 0.5
  );
  const [selection, setSelection] = useState("");
  const selectOption = (e: FormEvent) => {
    e.preventDefault();
    setSelection(e.currentTarget.id);
  };

  return (
    <li
      key={`q${id}`}
      className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5"
    >
      <fieldset>
        <div>
          <legend className="text-md rounded-t-md bg-gray-100 p-4 text-center">
            {question}
          </legend>
        </div>
        <ul className="grid grid-flow-row grid-cols-1 gap-1 text-slate-700 md:grid-cols-2">
          {allAnswers.map((answer, index) => (
            <AnswerField
              optionText={answer}
              key={`q${id}a${index}`} /* this needs to be replaced with a database key */
              question={question}
              checked={selection === answer}
              onChange={selectOption}
            />
          ))}
        </ul>
      </fieldset>
    </li>
  );
};
