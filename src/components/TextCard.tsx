import type { TextCardProps } from "../declarations";
import { sizes } from "../assets/styles";
import { clsx } from "clsx";
import { ReactNode } from "react";

export const TextCard = (props: TextCardProps) => {
  return (
    <li
      key={props.key}
      className={clsx(
        "m-auto my-4 w-11/12 rounded-md bg-slate-50 p-1 shadow-lg md:w-4/5",
        sizes
      )}
    >
      <p className="text-md rounded-t-md bg-gray-100 p-4">
        {props.content.map(
          (para: string): ReactNode => (
            <p className="py-2">{para}</p>
          )
        )}
      </p>
    </li>
  );
};
