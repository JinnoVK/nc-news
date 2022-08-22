import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
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
                  Topic: {article.topic}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Posted by: {article.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {dayjs(article.created_at).format("DD/MM/YYYY")}
                </Typography>
              </div>
              <Typography gutterBottom variant="h5" component="div">
                <Link to={`/article/${article.article_id}`}>
                  {article.title}
                </Link>
              </Typography>
              <div className="articleCardBottom">
                <Typography variant="caption" color="text.secondary">
                  Comments: {article.comment_count}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Score: {article.votes}
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
