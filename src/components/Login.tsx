import { Form, Field, Formik, FormikHelpers } from "formik";
import { TextCard } from "./TextCard";
import { LoginValues } from "../declarations";
import { clsx } from "clsx";
import { textCardStyle } from "../assets/styles";

export const Login = () => {
  return (
    <div className="my-auto p-6 text-center">
      <Formik
        initialValues={{ email: "", passphrase: "" }}
        onSubmit={(
          values: LoginValues,
          { setSubmitting }: FormikHelpers<LoginValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className={clsx(textCardStyle)}>
            <div className="p-4">Login</div>
            <div className="grid grid-cols-5 p-2">
              <label htmlFor="email" className="col-span-2 p-2">
                Email:{" "}
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-5 p-2">
              <label htmlFor="passphrase" className="col-span-2 p-2">
                Passphrase:{" "}
              </label>
              <Field
                id="passphrase"
                name="passphrase"
                type="password"
                className="col-span-3"
              />
            </div>
          </div>
          <div key="submit" className={clsx(textCardStyle, "py-4")}>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
