import type { TextCardProps } from "../declarations";
import { sizes, textCardStyle } from "../assets/styles";
import { clsx } from "clsx";
import { ReactNode } from "react";

export const TextCard = (props: TextCardProps) => {
  return (
    <li key={props.key} className={clsx(textCardStyle, sizes)}>
      <p className="text-md rounded-t-md bg-gray-100 p-4">
        {props.content.map(
          (para: string): ReactNode => (
            <p className="py-4">{para}</p>
          )
        )}
        {props.children && props.children}
      </p>
    </li>
  );
};
