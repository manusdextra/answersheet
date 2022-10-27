import type { TextCardProps } from "../declarations";
import { sizes } from "../assets/styles";
import { clsx } from "clsx";

export const TextCard = (props: TextCardProps) => {
  return (
    <li
      key={props.key}
      className={clsx(
        "m-auto my-4 w-11/12 rounded-md bg-slate-50 p-1 shadow-lg md:w-4/5",
        sizes
      )}
    >
      <p className="text-md rounded-t-md bg-gray-100 p-4 text-center">
        {props.content}
      </p>
    </li>
  );
};
