import type { Question, FormProps } from "../declarations";
import { QuestionField } from "./QuestionField";

export const Form = (props: FormProps) => {
  return (
    <form>
      {props.data.map((question: Question) => (
        <QuestionField {...question} />
      ))}
    </form>
  );
};
