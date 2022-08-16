import type { Question, FormProps } from "../declarations";
import { QuestionField } from "./QuestionField";

export const Form = (props: FormProps) => {
  return (
    <form>
      {props.data.map((question: Question) => (
        <ul>
          <QuestionField
            key={`question${question.id.toString()}`}
            {...question}
          />
        </ul>
      ))}
    </form>
  );
};
