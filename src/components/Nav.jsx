import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import { getTopics } from "../api/api";
import { useState, useEffect } from "react";

export default function Nav() {
  const [value, setValue] = React.useState("1");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics.topics);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            <Tab
              label={
                <Link
                  className="links"
                  to="/"
                  onClick={() => (window.location.href = "/")}
                >
                  Home
                </Link>
              }
              value="1"
            />
            <Tab label="Topics" value="2" />
          </TabList>
        </Box>
        <TabPanel value="2">
          <div className="links">
            {topics.map((topic) => {
              return (
                <Link
                  key={topic.slug}
                  className="links"
                  to={`/topics/${topic.slug}`}
                >
                  {topic.slug}
                </Link>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
