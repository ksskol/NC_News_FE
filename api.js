import axios from "axios";

function getArticles() {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/articles`)
    .then((response) => {
      return response.data
    });
}
const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/articles/${article_id}`)
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
export { getArticles, getCategories, getArticleById};
