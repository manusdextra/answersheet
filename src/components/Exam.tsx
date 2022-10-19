import { Field, Form, Formik, FormikValues } from "formik";
import type { Question } from "../declarations.d";
import { mockexam } from "../assets/mockexam";

const data = mockexam;

let initials: { [key: string]: string } = {};
for (const x of data) {
  initials[`question ${x.id + 1}`] = "";
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
              <li
                key={question.id}
                id={`body-${question.id}`}
                className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5"
              >
                <fieldset>
                  <legend className="text-md rounded-t-md bg-gray-100 p-4 text-center">
                    {question.question}
                  </legend>
                  <ul className="grid grid-flow-row grid-cols-1 gap-1 text-slate-700 md:grid-cols-2">
                    {[...question.wronganswers, question.rightanswer].map(
                      (answer, index) => (
                        <li key={`q${question.id}-a${index}`} className="flex">
                          <Field
                            type="radio"
                            className="peer flex-shrink appearance-none"
                            id={`q${question.id}-a${index}`}
                            value={`answer ${index + 1}`}
                            name={`question ${question.id + 1}`}
                          />
                          <label
                            htmlFor={`q${question.id}-a${index}`}
                            className="text-md flex-grow rounded-md bg-slate-200 p-4 text-center font-medium ring-inset peer-checked:bg-slate-400 peer-hover:ring-4 peer-hover:ring-slate-400 peer-active:bg-slate-400"
                          >
                            {answer}
                          </label>
                        </li>
                      )
                    )}
                  </ul>
                </fieldset>
              </li>
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
