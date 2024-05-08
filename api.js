import axios from "axios";

const getArticles = () => {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/articles`)
    .then((response) => {
      return response.data;
    });
};
const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response;
    });
};

const getComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-ufj8.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response;
    });
};

const getCategories = () => {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/topics`)
    .then((response) => {
      return response;
    });
};

const getAllUsers = () => {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/users`)
    .then((response) => {
      return response;
    });
};

const updateVotesByArticleId = (article_id, voteChange) => {
  const updateVoteObject = { inc_votes: voteChange };

  return axios.patch(
    `https://nc-news-ufj8.onrender.com/api/articles/${article_id}`,
    updateVoteObject
  );
};

export {
  getArticles,
  getCategories,
  getArticleById,
  getComments,
  updateVotesByArticleId,
  getAllUsers,
};
