import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { useState } from "react";
import { patchArticleById } from "../api/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ThumbDown } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ArticleBody({ article }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [err, setErr] = useState(null);

  const handleUpvoteClick = (id, isUpvote) => {
    if (!isUpvoted) {
      setOptimisticVotes((currVotes) => {
        setErr(null);
        return currVotes + 1;
      });
      patchArticleById(id, isUpvote).catch((err) => {
        setOptimisticVotes((currVotes) => {
          setErr("Something went wrong, please try again.");
          return currVotes - 1;
        });
      });
    } else {
      alert("You may only vote once");
    }
    setIsUpvoted(true);
  };

  const handleDownvoteClick = (id, isDownvote) => {
    if (!isDownvoted) {
      setOptimisticVotes((currVotes) => {
        setErr(null);
        return currVotes - 1;
      });
      patchArticleById(id, isDownvote).catch((err) => {
        setOptimisticVotes((currVotes) => {
          setErr("Something went wrong, please try again.");
          return currVotes + 1;
        });
      });
    } else {
      alert("You may only vote once");
    }

    setIsDownvoted(true);
  };

  if (err) return <p>{err}</p>;
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "auto" }}
    >
      <Grid item xs={3}>
        <Card sx={{ minWidth: "100vw" }}>
          <div className="ArticleCard">
            {" "}
            <CardContent>
              <div className="articleCardTop">
                <Typography variant="caption" color="text.secondary">
                  {article?.topic}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Posted by: {article?.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {dayjs(article?.created_at).format("DD/MM/YYYY")}
                </Typography>
              </div>
              <Typography gutterBottom variant="h5" component="div">
                {article?.title}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                {article?.body}
              </Typography>
              <div className="singleArticleCardBottom">
                <Typography variant="caption" color="text.secondary">
                  Score: {article?.votes + optimisticVotes}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <section className="cardVotes">
                <Button
                  onClick={() => handleUpvoteClick(article.article_id, true)}
                >
                  <ThumbUpIcon />
                </Button>
                <Button
                  onClick={() => handleDownvoteClick(article.article_id, false)}
                >
                  <ThumbDown />
                </Button>
              </section>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
