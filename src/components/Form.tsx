import type { FormProps } from "../declarations";

export const Form = (props: FormProps) => {
  return (
    <>
      <ul className={props.className}>
        {props.data.map(({ id, question }) => (
          <li key={id}>{question}</li>
        ))}
      </ul>
    </>
  );
};
