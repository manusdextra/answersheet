import { Form, Formik, FormikValues } from "formik";
import type { MultiCloze, Question, ExamAnswers } from "../declarations.d";
import { QuestionField } from "./QuestionField";
import { TextCard } from "./TextCard";
import { sizes } from "../assets/styles";
import { clsx } from "clsx";

export const Exam = (data: MultiCloze) => {
  let initials: ExamAnswers = {};
  for (const x of data.questions) {
    initials[`question ${x.id}`] = "";
  }

  return (
    <ul className="p-6">
      <TextCard key="introduction" content={[data.instructions]} />
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
              className={clsx(
                "m-auto my-12 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg",
                sizes
              )}
            >
              <button type="submit">Submit</button>
            </li>
          </Form>
        )}
      </Formik>
    </ul>
  );
};
