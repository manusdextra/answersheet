import type { Question, FormProps } from "../declarations";
import { QuestionField } from "./QuestionField";

export const Form = (props: FormProps) => {
  return (
    <>
      {props.data.map((question: Question) => (
        <QuestionField {...question} />
      ))}
    </>
  );
};
