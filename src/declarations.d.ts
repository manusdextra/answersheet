import { FormEventHandler } from "react";

export interface Exam {
  instructions: string;
  text?: string;
}

export interface LevelTest extends Exam {
  questions: MultipleChoice[];
}

export interface Reading1 extends Exam {
  questions: MultipleChoice[];
}

export interface Reading2 extends Exam {
  questions: TextInput[];
}

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
