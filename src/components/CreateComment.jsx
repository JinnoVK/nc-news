import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { postCommentById } from "../api/api";

export default function CreateComment({ articleID, setComments }) {
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentById(articleID, commentBody).then(({ comment }) => {
      setComments((currComments) => {
        return [...currComments, comment[0]];
      });
    });
    setCommentBody("");
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0, maxWidth: "100%", minWidth: "100%" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <section className="commentInput">
        <TextField
          onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
          onChange={(e) => setCommentBody(e.target.value)}
          value={commentBody}
          id="commentInput"
          label="Want to comment?"
          variant="outlined"
        />
      </section>
      <Button type="submit" onClick={() => handleSubmit}>
        Submit!
      </Button>
    </Box>
  );
}
