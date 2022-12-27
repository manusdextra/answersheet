import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavItem = (props: {
  children: ReactNode;
  link?: boolean;
  className?: string;
}) => {
  return (
    <li
      className={clsx(
        "p-3",
        props.link && "hover:bg-slate-100",
        props.className
      )}
    >
      {props.children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <ul className="sticky top-0 flex bg-white p-6 px-12 md:h-screen md:flex-col">
      <NavItem className="border-b-2 border-dotted text-xl">
        <h1>Reading</h1>
      </NavItem>
      <NavItem link={true}>
        <Link to={`exams/readingpart1`}>Part 1</Link>
      </NavItem>
      <NavItem link={true}>
        <Link to={`exams/readingpart2`}>Part 2</Link>
      </NavItem>
      <NavItem link={true}>
        <Link to={`exams/readingpart3`}>Part 3</Link>
      </NavItem>
      <NavItem className="flex-grow">{/* flex spacer */}</NavItem>
      <NavItem>
        <Link to={"login"}>Login</Link>
      </NavItem>
      <NavItem>
        <Link to={"/"}>Home</Link>
      </NavItem>
    </ul>
  );
};
