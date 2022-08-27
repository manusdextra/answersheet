import { Form } from "./components/Form";
import { mockexam } from "./assets/mockexam";
import { FormEvent, FormEventHandler } from "react";

function App() {
  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="flex-column min-h-screen bg-gradient-to-tl from-amber-100 to-amber-300 py-6 pt-4">
      <Form data={mockexam} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
