export type Question = {
  id: number;
  question: string;
  rightanswer: string;
  wronganswers: string[];
};

export type Answer = {
  key: string;
  optionText: string;
};

export type Exam = Question[];

export type FormProps = {
  className?: string;
  data: Exam;
};
