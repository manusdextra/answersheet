import type { Question, FormProps } from "../declarations.d";
// import { QuestionField } from "./QuestionField";
import { Form, Field, Formik } from "formik";

export const Exam = (props: FormProps) => {
  return (
    <Formik
      initialValues={{
        picked: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <Form>
          <ul>
            <>
              {props.data.map((question: Question) => {
                <li className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5">
                  <fieldset>
                    <legend className="text-md rounded-t-md bg-gray-100 p-4 text-center">
                      {question.question}
                    </legend>
                    <div role="group" aria-labelledby="my-radio-group">
                      <ul className="grid grid-flow-row grid-cols-1 gap-1 text-slate-700 md:grid-cols-2">
                        {[...question.wronganswers, question.rightanswer].map(
                          (answer, index) => (
                            <label>
                              <Field
                                type="radio"
                                value={answer}
                                key={`q${question.id}a${index}`} /* this needs to be replaced with a database key */
                                name={question}
                              />
                              {question.question}
                            </label>
                          )
                        )}
                      </ul>
                    </div>
                  </fieldset>
                </li>;
              })}
            </>
            <li className="m-auto my-12 w-4/5 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg md:w-3/5">
              <button type="submit">Submit</button>
            </li>
          </ul>
        </Form>
      )}
    </Formik>
  );
};
// <form>
//   <ul>
//     {props.data.map((question: Question) => (
//       <QuestionField
//         key={`question${question.id.toString()}`}
//         {...question}
//       />
//     ))}
//     <li className="m-auto my-12 w-4/5 rounded-md bg-slate-50 p-1 py-6 text-center shadow-lg md:w-3/5">
//       <button>Submit</button>
//     </li>
//   </ul>
// </form>
