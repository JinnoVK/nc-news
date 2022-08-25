import { useState, useEffect } from "react";
import { getArticleById, getArticleComments } from "../api/api";
import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import ErrorPage from "./ErrorPage";

const ArticleContainer = () => {
  let { articleID } = useParams();

  const [article, setArticles] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(articleID)
      .then(({ article }) => {
        setArticles(article);
      })
      .catch((err) => {
        setError({ err });
      });
    getArticleComments(articleID).then(({ comments }) => {
      setComments(comments);
    });
  }, [articleID]);

  if (error) {
    return <ErrorPage message={error.err.message} />;
  }

  return (
    <div className="ArticleContainer">
      <ArticleBody article={article[0]} />
      <CreateComment articleID={articleID} setComments={setComments} />
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
            articleID={articleID}
          />
        );
      })}
    </div>
  );
};

export default ArticleContainer;
