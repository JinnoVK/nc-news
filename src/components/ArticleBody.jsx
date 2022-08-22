import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";

export default function ArticleBody({ article }) {
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
              <div className="articleCardBottom">
                <Typography variant="caption" color="text.secondary">
                  Score: {article?.votes}
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
