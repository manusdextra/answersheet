import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import { Exam } from "./components/Exam";
import { readingPart1, readingPart2, readingPart3 } from "./assets/mockexam";
import { ErrorPage } from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "exams/readingpart1",
        element: <Exam {...readingPart1} />,
      },
      {
        path: "exams/readingpart2",
        element: <Exam {...readingPart2} />,
      },
      {
        path: "exams/readingpart3",
        element: <Exam {...readingPart3} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
