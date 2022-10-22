import { Exam } from "./components/Exam";
import { loremIpsum, readingPart1 } from "./assets/mockexam";

function App() {
  return (
    <div className="flex-column min-h-screen bg-gradient-to-tl from-amber-100 to-amber-300 py-6 pt-4">
      <Exam {...readingPart1} />
    </div>
  );
}

export default App;
