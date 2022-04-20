import { GET } from "./fetch";

export const getQuestions = () => {
  var response = GET("get-questions/");
  return response;
};

