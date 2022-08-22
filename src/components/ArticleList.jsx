import { useState, useEffect } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  let { topic } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div className="ArticleList">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
