import { FormEventHandler } from "react";

export type LevelTest = {
  questions: MultipleChoice[];
};

export type Reading1 = {
  text: string;
  questions: MultipleChoice[];
};

export type Reading2 = {
  text: string;
  questions: TextInput[];
};

export type Question = {
  id: number;
  example?: boolean;
  question?: string;
  rightanswer: string;
};

export interface MultipleChoice extends Question {
  wronganswers?: string[];
  allAnswers?: string[];
}

export interface TextInput extends Question {
  alternatives?: string[];
}

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

export type TextCardProps = {
  key: string;
  content: string;
};
