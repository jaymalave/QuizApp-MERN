import { POST } from "./fetch";

export const updateScore = (score) => {
  var response = POST("update/", {
    score: score,
  });
  return response;
};
