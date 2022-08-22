import axios from "axios";

export const getArticles = async () => {
  const { data } = await axios.get(
    "https://be-ncnews.herokuapp.com/api/articles"
  );

  return data;
};
