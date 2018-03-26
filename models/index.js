const db = require("../database/connection.js");
const fetch = require("node-fetch");

let getNews = () => {
  let link =
    "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=596765967a80416c8c7f60c9fc7cba2a";
  let get = url => {
    return fetch(url).then(response => response.json());
  };
  let displayNews = get(link).then(response => {
    return response;
  });
  displayNews.then(data => {
    //   let image = data.articles.urlToImage;
    //   return image;
    //   //   let $apiImage = $(
    //   //     `<a href="#"><img class="card-img-top img-fluid w-100" src="${image}" alt=""></a>`
    //   //   );
    //   //   $("#article-1").prepend($apiImage);
    return data;
  });
};

module.exports = {
  getNews: getNews
};
