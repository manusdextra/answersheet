import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="flex gap-6 bg-white p-6 px-12 md:flex-col">
      <li>
        <h1 className="pb-4 text-xl ">Reading</h1>
      </li>
      <li>
        <Link to={`exams/readingpart1`}>Part 1</Link>
      </li>
      <li>
        <Link to={`exams/readingpart2`}>Part 2</Link>
      </li>
    </ul>
  );
};
