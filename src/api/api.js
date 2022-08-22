import axios from "axios";

export const getArticles = async (topic = "") => {
  const { data } = await axios.get(
    `https://be-ncnews.herokuapp.com/api/articles?topic=${topic}`
  );

  return data;
};

export const getTopics = async () => {
  const { data } = await axios.get(
    "https://be-ncnews.herokuapp.com/api/topics"
  );

  return data;
};
