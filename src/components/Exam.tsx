import { Form, Formik, FormikValues } from "formik";
import type { MultiCloze, Question, ExamAnswers } from "../declarations.d";
import { QuestionField } from "./QuestionField";
import { TextCard } from "./TextCard";
import { sizes } from "../assets/styles";
import { clsx } from "clsx";

export const Exam = (examPart: MultiCloze) => {
  let initials: ExamAnswers = {};
  for (const x of examPart.questions) {
    initials[`q${x.id}`] = "";
  }

  return (
    <ul className="p-6">
      <TextCard key="introduction" content={[examPart.instructions]} />
      {examPart.text && <TextCard key="text" content={examPart.text} />}
      <Formik
        initialValues={initials}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <Form>
          {examPart.questions.map((question: Question) => (
            <QuestionField {...question} />
          ))}
          <li
            key="submit"
            className={clsx(
              "m-auto my-12 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg",
              sizes
            )}
          >
            <button type="submit">Submit</button>
          </li>
        </Form>
      </Formik>
    </ul>
  );
};
