import { Form } from "./components/Form";
import type { Exam } from "./declarations";
import "./App.css";
// import * as mockexam from "./assets/mockexam.json";

const mockexam: Exam = [
  {
    id: 0,
    question: "blabla",
    rightanswer: "blublub",
    wronganswers: ["bliblib", "bloblob", "blebleb"],
  },
  {
    id: 1,
    question: "blabla",
    rightanswer: "blublub",
    wronganswers: ["bliblib", "bloblob", "blebleb"],
  },
  {
    id: 2,
    question: "blabla",
    rightanswer: "blublub",
    wronganswers: ["bliblib", "bloblob", "blebleb"],
  },
];

function App() {
  return (
    <>
      <Form className="Exam" data={mockexam} />
    </>
  );
}

export default App;
