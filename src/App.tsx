import { Form } from "./components/Form";
import type { Exam } from "./declarations";
// import * as mockexam from "./assets/mockexam.json";

const mockexam: Exam = [
  {
    id: 0,
    question:
      "Ipsum ea impedit rerum commodi voluptas architecto id voluptates. ",
    rightanswer: "Aut minus consequuntur porro dicta quos.",
    wronganswers: [
      "Non accusamus et tenetur repudiandae eos nobis porro si",
      "Libero rerum sunt voluptatem rerum expedita odit.",
      "Maiores sequi sit et nisi sequi consectetur.",
    ],
  },
  {
    id: 1,
    question:
      "Velit qui voluptatem aperiam. Laudantium dolorem voluptatum non nesciunt. ",
    rightanswer: "voluptatum non nesciunt.",
    wronganswers: [
      "Ex quis accusamus eveniet inventore non. ",
      "Vitae non ipsum sunt quos quis amet aut.",
      "Ipsum ea impedit rerum commodi voluptas architecto id voluptates. ",
    ],
  },
  {
    id: 2,
    question:
      "Vitae non ipsum sunt quos quis amet aut. Aspernatur quia id pariatur non eum et unde veritatis. ",
    rightanswer: "Laudantium dolorem ",
    wronganswers: [
      "Voluptas perferendis eos animi maiores qui",
      "Corporis eveniet ut dolor libero eos sed dolores quia. ",
      "Voluptatem quia minus temporibus molestias quo.",
    ],
  },
];

function App() {
  return (
    <div className="flex-column min-h-screen bg-gradient-to-tl from-amber-100 to-amber-300 py-6 pt-4">
      <Form data={mockexam} />
    </div>
  );
}

export default App;
