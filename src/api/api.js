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

export const getArticleById = async (id) => {
  const { data } = await axios.get(
    `https://be-ncnews.herokuapp.com/api/articles/${id}`
  );

  return data;
};

export const patchArticleById = async (id, isUpvote) => {
  if (isUpvote) {
    const { data } = await axios.patch(
      `https://be-ncnews.herokuapp.com/api/articles/${id}`,
      { inc_votes: 1 }
    );
    return data;
  }
  const { data } = await axios.patch(
    `https://be-ncnews.herokuapp.com/api/articles/${id}`,
    { inc_votes: -1 }
  );
  return data;
};

export const getArticleComments = async (id) => {
  const { data } = await axios.get(
    `https://be-ncnews.herokuapp.com/api/articles/${id}/comments`
  );

  return data;
};
