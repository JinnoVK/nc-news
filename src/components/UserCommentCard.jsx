import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { deleteCommentById, getArticleComments } from "../api/api";
import { useState } from "react";

export default function UserCommentCard({ comment, setComments, articleID }) {
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = () => {
    if (!isActivated) {
      deleteCommentById(comment.comment_id)
        .then(() => {
          alert("Successfully deleted comment!");
        })
        .then(() => {
          getArticleComments(articleID).then(({ comments }) => {
            setComments(comments);
          });
        });

      setIsActivated(true);
    } else {
      alert("Please wait until your comment is removed!");
    }
  };
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
          <div className="commentCard">
            {" "}
            <CardContent>
              <div className="commentCardTop">
                <Typography variant="caption" color="text.secondary">
                  Comment by:{comment.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {dayjs(comment.created_at).format("DD/MM/YYYY")}
                </Typography>
              </div>
              <Typography gutterBottom variant="body2" component="div">
                {comment.body}
              </Typography>
              <div className="commentCardBottom">
                <Typography variant="caption" color="text.secondary">
                  Score: {comment.votes}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <section className="cardVotes">
                <Button onClick={() => handleClick()}> Delete comment</Button>
              </section>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
