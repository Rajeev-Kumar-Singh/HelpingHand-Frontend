import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";

const topics = [
  {
    title: "Education",
    description:
      "Our education programs aim to provide quality education to underprivileged children, offering scholarships and building schools in remote areas.",
  },
  {
    title: "Health",
    description:
      "We focus on improving healthcare access by organizing medical camps, providing free health check-ups, and promoting health awareness in communities.",
  },
  {
    title: "Women Empowerment",
    description:
      "Our women empowerment initiatives include skill development programs, self-help groups, and leadership training to help women achieve financial independence.",
  },
  {
    title: "Cow Seva",
    description:
      "We promote the well-being of cows through our Cow Seva programs, which include cow shelters, healthcare, and awareness campaigns about the importance of cow protection.",
  },
  {
    title: "Disaster Management",
    description:
      "Our disaster management efforts focus on providing immediate relief and rehabilitation to communities affected by natural disasters. We are here for the quick response to the area where disaster happens.",
  },
  {
    title: "Nature Conservation",
    description:
      "We engage in various activities to conserve nature, including tree plantation drives, wildlife protection, and promoting sustainable practices.",
  },
];

function OurPrograms() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, mb: 10 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", mb: 10, color: "green", fontWeight: "bold" }}
      >
        OUR PROGRAMMES
      </Typography>
      <Grid container spacing={2}>
        {topics.map((topic, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  {topic.title}
                </Typography>
                <Typography variant="body1">{topic.description}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurPrograms;
