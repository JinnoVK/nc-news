import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";

export default function ArticleBody({ article }) {
  const newArticle = { ...article };
  const { 0: articleBody } = newArticle;

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
                  {articleBody?.topic}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Posted by: {articleBody?.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {dayjs(articleBody?.created_at).format("DD/MM/YYYY")}
                </Typography>
              </div>
              <Typography gutterBottom variant="h5" component="div">
                {articleBody?.title}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                {articleBody?.body}
              </Typography>
              <div className="articleCardBottom">
                <Typography variant="caption" color="text.secondary">
                  Score: {articleBody?.votes}
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
