import { FormEventHandler } from "react";

export type Question = {
  id: number;
  question: string;
  rightanswer: string;
  wronganswers: string[];
};

export type Answer = {
  key: string;
  question: string;
  optionText: string;
  checked: boolean;
  onChange: any;
};

export type Exam = Question[];

export type FormProps = {
  className?: string;
  data: Exam;
  onSubmit: FormEventHandler;
};