import { FormEventHandler } from "react";

export type Question = {
  id: number;
  question: string;
  rightanswer: string;
  wronganswers: string[];
  allAnswers?: string[];
};

export type Answer = {
  key: string;
  question: string;
  optionText: string;
  checked: boolean;
  onChange: any;
};

export type ExamAnswers = { [key: string]: string };

export type FormProps = {
  className?: string;
  data: Exam;
};
