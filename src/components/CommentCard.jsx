import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import UserCommentCard from "./UserCommentCard";

export default function CommentCard({ comment, setComments, articleID }) {
  if (comment.author === "grumpy19") {
    return (
      <UserCommentCard
        comment={comment}
        setComments={setComments}
        articleID={articleID}
      />
    );
  }

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
            <CardActions></CardActions>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
