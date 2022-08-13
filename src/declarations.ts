export type Question = {
  id: number;
  question: string;
  rightanswer: string;
  wronganswers: string[];
};

export type Exam = Question[];

export type FormProps = {
  className?: string;
  data: Exam;
};
