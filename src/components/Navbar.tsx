import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full bg-white p-6">
      Navigation
      <ul>
        <li>
          <Link to={`exams/readingpart1`}>Reading Part 1</Link>
        </li>
        <li>
          <Link to={`exams/readingpart2`}>Reading Part 2</Link>
        </li>
      </ul>
    </div>
  );
};
