import type { Answer } from "../declarations";

export const AnswerField = ({ optionText }: Answer) => {
  return (
    <div
      key={optionText}
      className="text-md m-2 h-auto rounded-md bg-slate-200 p-4 text-center font-medium hover:bg-slate-400"
    >
      <input type="radio" id={optionText} />
      <label htmlFor={optionText} className="">
        {optionText}
      </label>
    </div>
  );
};
