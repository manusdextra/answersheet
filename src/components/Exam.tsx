import { Form, Formik, FormikValues } from "formik";
import type { Reading1, Question, ExamAnswers } from "../declarations.d";
import { QuestionField } from "./QuestionField";
import { TextCard } from "./TextCard";

export const Exam = (data: Reading1) => {
  let initials: ExamAnswers = {};
  for (const x of data.questions) {
    initials[`question ${x.id}`] = "";
  }

  return (
    <ul className="p-6">
      <TextCard
        key="introduction"
        content="For every question, choose the right answer."
      />
      {data.text && <TextCard key="text" content={data.text} />}
      <Formik
        initialValues={initials}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ values }: FormikValues) => (
          <Form>
            {data.questions.map((question: Question) => (
              <QuestionField {...question} />
            ))}
            <li
              key="submit"
              className="m-auto my-12 w-4/5 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg md:w-3/5"
            >
              <button type="submit">Submit</button>
            </li>
          </Form>
        )}
      </Formik>
    </ul>
  );
};
