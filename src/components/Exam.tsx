import { Form, Formik, FormikValues } from "formik";
import type { Question, ExamAnswers } from "../declarations.d";
import { mockexam } from "../assets/mockexam";
import { QuestionField } from "./QuestionField";

const data = mockexam;

let initials: ExamAnswers = {};
for (const x of data) {
  initials[`question ${x.id}`] = "";
}

export const Exam = () => {
  return (
    <Formik
      initialValues={initials}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ values }: FormikValues) => (
        <Form>
          <ul>
            {data.map((question: Question) => (
              <QuestionField {...question} />
            ))}
            <li
              key="submit"
              className="m-auto my-12 w-4/5 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg md:w-3/5"
            >
              <button type="submit">Submit</button>
            </li>
          </ul>
        </Form>
      )}
    </Formik>
  );
};
