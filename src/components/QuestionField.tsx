import { clsx } from "clsx";
import { sizes } from "../assets/styles";
import { Field } from "formik";
import type { MultipleChoice } from "../declarations.d";

const AnswerButtons = (props: { columns: number; children: JSX.Element[] }) => {
  const columns: { [key: number]: string } = {
    2: "grid-cols-2",
    4: "grid-cols-4",
  };

  const classes: string[] = [
    "flex-grow",
    "grid",
    "grid-flow-row",
    "gap-1",
    "text-slate-700",
    columns[props.columns],
  ];

  return <ul className={clsx(classes)}>{props.children}</ul>;
};

export const QuestionField = (props: MultipleChoice) => {
  return (
    <li
      key={props.id}
      id={`body-${props.id}`}
      className={clsx(
        "m-auto my-4 rounded-md bg-slate-50 p-1 shadow-lg",
        sizes
      )}
    >
      <fieldset>
        {props.question && <legend className="p-4">{props.question}</legend>}
        {/* 
        this part is tricky. I need to figure out how to check what type of question is actually being used.
        Probably I just need to make the components more abstract so I can simply include whichever one is relevant
        */}
        <div className="flex flex-row">
          <div className="flex-grow-0 place-self-center p-4">
            {props.id + 1}
          </div>
          {props.wronganswers ? (
            <AnswerButtons columns={4}>
              {[...props.wronganswers, props.rightanswer].map(
                (answer, index) => (
                  <li key={`q${props.id}-a${index}`} className="flex">
                    <Field
                      type="radio"
                      className="peer flex-shrink appearance-none"
                      id={`q${props.id}-a${index}`}
                      name={`question ${props.id}`}
                    />
                    <label
                      htmlFor={`q${props.id}-a${index}`}
                      className="text-md flex-grow rounded-md bg-slate-200 p-4 text-center font-medium ring-inset peer-checked:bg-slate-400 peer-hover:ring-4 peer-hover:ring-slate-400 peer-active:bg-slate-400"
                    >
                      {answer}
                    </label>
                  </li>
                )
              )}
            </AnswerButtons>
          ) : (
            <>
              <Field
                className="text-md flex-grow rounded-md bg-slate-200 p-4 text-center font-medium ring-inset peer-checked:bg-slate-400 peer-hover:ring-4 peer-hover:ring-slate-400 peer-active:bg-slate-400"
                name={`question ${props.id}`}
                type="text"
              />
            </>
          )}
        </div>
      </fieldset>
    </li>
  );
};
