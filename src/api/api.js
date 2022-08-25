import axios from "axios";

export const getArticles = async (topic = "", orderType, sortBy) => {
  const { data } = await axios.get(
    `https://be-ncnews.herokuapp.com/api/articles?topic=${topic}&order=${orderType}&sort=${sortBy}`
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

export const postCommentById = async (id, body) => {
  const { data } = await axios.post(
    `https://be-ncnews.herokuapp.com/api/articles/${id}/comments`,
    { username: "grumpy19", body: body }
  );

  return data;
};

export const deleteCommentById = async (commentId) => {
  const { data } = await axios.delete(
    `https://be-ncnews.herokuapp.com/api/comments/${commentId}`
  );

  return data;
};
