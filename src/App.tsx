import { Form } from "./components/Form";
import type { Exam } from "./declarations";
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
    <div className="flex-column min-h-screen bg-gradient-to-tl from-amber-100 to-amber-300 pt-4">
      <Form data={mockexam} />
    </div>
  );
}

export default App;
