import { GET } from "./fetch";

export const getLeaderboard = () => {
  var response = GET("get-leaderboard/");
  return response;
};
