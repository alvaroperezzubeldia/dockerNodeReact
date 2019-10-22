export interface FormResponse {
  id: number,
  text: string,
  answer: string,
  stars: number;
  error?: boolean
}

export interface QuestionI {
  id: number,
  text: string,
  error?: boolean
}