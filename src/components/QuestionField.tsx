import { Field } from "formik";
import type { Question } from "../declarations.d";

export const QuestionField = (props: Question) => {
  return (
    <li
      key={props.id}
      id={`body-${props.id}`}
      className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5"
    >
      <fieldset>
        {props.question && <legend className="p-4">{props.question}</legend>}
        <ul className="grid grid-flow-row grid-cols-1 gap-1 text-slate-700 md:grid-cols-2">
          {[...props.wronganswers, props.rightanswer].map((answer, index) => (
            <li key={`q${props.id}-a${index}`} className="flex">
              <Field
                type="radio"
                className="peer flex-shrink appearance-none"
                id={`q${props.id}-a${index}`}
                value={`answer ${index}`}
                name={`question ${props.id}`}
              />
              <label
                htmlFor={`q${props.id}-a${index}`}
                className="text-md flex-grow rounded-md bg-slate-200 p-4 text-center font-medium ring-inset peer-checked:bg-slate-400 peer-hover:ring-4 peer-hover:ring-slate-400 peer-active:bg-slate-400"
              >
                {answer}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </li>
  );
};
