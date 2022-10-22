import type { TextCardProps } from "../declarations";

export const TextCard = (props: TextCardProps) => {
  return (
    <li
      key={props.key}
      className="m-auto my-4 w-4/5 rounded-md bg-slate-50 p-1 shadow-lg md:w-3/5"
    >
      <p className="text-md rounded-t-md bg-gray-100 p-4 text-center">
        {props.content}
      </p>
    </li>
  );
};
