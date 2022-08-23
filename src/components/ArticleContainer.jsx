import { useState, useEffect } from "react";
import { getArticleById } from "../api/api";
import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";

const ArticleContainer = () => {
  let { articleID } = useParams();

  const [article, setArticles] = useState({});

  useEffect(() => {
    getArticleById(articleID).then(({ article }) => {
      setArticles(article);
    });
  }, [articleID]);

  return (
    <div className="ArticleContainer">
      <ArticleBody article={article[0]} setArticles={setArticles} />
    </div>
  );
};

export default ArticleContainer;
