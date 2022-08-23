import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { Button } from "@mui/material";

export default function CommentCard({ comment }) {
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
                <Button></Button>
                <Button></Button>
              </section>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
