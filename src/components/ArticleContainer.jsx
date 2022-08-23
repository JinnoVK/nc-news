import { useState, useEffect } from "react";
import { getArticleById, getArticleComments } from "../api/api";
import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";

const ArticleContainer = () => {
  let { articleID } = useParams();

  const [article, setArticles] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(articleID).then(({ article }) => {
      setArticles(article);
    });
    getArticleComments(articleID).then(({ comments }) => {
      setComments(comments);
    });
  }, [articleID]);

  return (
    <div className="ArticleContainer">
      <ArticleBody article={article[0]} />
      <CreateComment articleID={articleID} setComments={setComments} />
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};

export default ArticleContainer;
