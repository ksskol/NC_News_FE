import axios from "axios";

function getArticles() {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/articles`)
    .then((response) => {
      return response.data
    });
}

const getCategories = () => {
  return axios
    .get(`https://nc-news-ufj8.onrender.com/api/topics`)
    .then((response) => {
      return response;
    });
};

export { getArticles, getCategories};
