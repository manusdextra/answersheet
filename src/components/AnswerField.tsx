import type { Answer } from "../declarations";

export const AnswerField = ({ question, optionText }: Answer) => {
  return (
    <li key={optionText} className="flex">
      <input
        type="radio"
        className="peer flex-shrink appearance-none"
        id={optionText}
        name={question}
      />
      <label
        htmlFor={optionText}
        className="text-md flex-grow rounded-md bg-slate-200 p-4 text-center font-medium ring-inset peer-hover:ring-4 peer-hover:ring-slate-400 peer-active:bg-slate-400"
      >
        {optionText}
      </label>
    </li>
  );
};
