import { Form, Formik, FormikValues } from "formik";
import type { Question, ExamAnswers } from "../declarations.d";
import { loremIpsum, readingPart1 } from "../assets/mockexam";
import { QuestionField } from "./QuestionField";

const data = loremIpsum;

let initials: ExamAnswers = {};
for (const x of data.questions) {
  initials[`question ${x.id}`] = "";
}

export const Exam = () => {
  return (
    <ul>
      <li
        key="introduction"
        className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5"
      >
        <p className="text-md rounded-t-md bg-gray-100 p-4 text-center">
          For every question, choose the right answer.
        </p>
      </li>
      {data.text ? (
        <li
          key="text"
          className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5"
        >
          <p className="text-md rounded-t-md bg-gray-100 p-4 text-center">
            {data.text}
          </p>
        </li>
      ) : (
        ""
      )}
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
