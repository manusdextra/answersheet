import { clsx } from "clsx";
import { sizes } from "../assets/styles";
import { Field } from "formik";
import { AnswerButtons } from "../components/AnswerButtons";
import type { MultipleChoice } from "../declarations.d";

export const QuestionField = (props: MultipleChoice) => {
  return (
    <li
      key={props.id}
      id={`body-${props.id}`}
      className={clsx(
        "m-auto my-4 rounded-md bg-slate-50 p-1 shadow-lg",
        sizes
      )}
    >
      <fieldset>
        {props.question && <legend className="p-4">{props.question}</legend>}
        {/* 
        this part is tricky. I need to figure out how to check what type of question is actually being used.
        Probably I just need to make the components more abstract so I can simply include whichever one is relevant
        */}
        <div className="flex flex-row">
          <div className="flex-grow-0 place-self-center p-4">
            {props.id + 1}
          </div>
          {props.options ? (
            <AnswerButtons columns={4} id={props.id} options={props.options} />
          ) : (
            <Field
              className="text-md flex-grow rounded-md bg-slate-200 p-4 text-center font-medium ring-inset peer-checked:bg-slate-400 peer-hover:ring-4 peer-hover:ring-slate-400 peer-active:bg-slate-400"
              name={`question ${props.id}`}
              type="text"
            />
          )}
        </div>
      </fieldset>
    </li>
  );
};
