import { clsx } from "clsx";
import { MultipleChoice } from "../declarations";
import { Field } from "formik";

export const AnswerButtons = (props: MultipleChoice & { columns: number }) => {
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

  return (
    <ul className={clsx(classes)}>
      {props.options &&
        props.options.map((answer, index) => (
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
        ))}
    </ul>
  );
};
