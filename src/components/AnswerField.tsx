import type { Answer } from "../declarations";

export const AnswerField = ({ question, optionText }: Answer) => {
  return (
    <div
      key={optionText}
      className="text-md m-2 h-auto rounded-md bg-slate-200 p-4 text-center font-medium hover:ring-4 hover:ring-slate-400"
    >
      <input type="radio" id={optionText} name={question} />
      <label htmlFor={optionText} className="">
        {optionText}
      </label>
    </div>
  );
};