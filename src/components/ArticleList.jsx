import { useState, useEffect } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import Sorting from "./Sorting";
import ErrorPage from "./ErrorPage";

const ArticleList = () => {
  let { topic } = useParams();
  let params = new URL(document.location).searchParams;
  let sortBy = params.get("sort") || "created_at";
  let orderType = params.get("order" || "desc") || "desc";

  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles(topic, orderType, sortBy)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [topic, orderType, sortBy]);

  if (error) {
    return <ErrorPage message={error.err.message} />;
  }
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="ArticleList">
      <Sorting />
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
