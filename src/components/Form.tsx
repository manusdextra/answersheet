import type { Question, FormProps } from "../declarations.d";
import { QuestionField } from "./QuestionField";

export const Form = (props: FormProps) => {
  return (
    <form onSubmit={props.onSubmit}>
      <ul>
        {props.data.map((question: Question) => (
          <QuestionField
            key={`question${question.id.toString()}`}
            {...question}
          />
        ))}
        <li className="m-auto my-12 w-4/5 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg md:w-3/5">
          <button>Submit</button>
        </li>
      </ul>
    </form>
  );
};
