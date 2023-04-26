import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { detail } from "@/service/detail";

const OnlineCourseDetailsDescription = (props) => {
  return (
    <Box
        sx={{
            pb: {
                md: 12,
                xs: 8
            }
        }}
    >
      <Container>
        <Typography
          sx={{
            py: { xs: 6, sm: 8 },
            fontWeight: 700,
            fontSize: {
              xs: "16px",
              sm: "24px",
            },
          }}>
          {detail.description}
        </Typography>
      </Container>
    </Box>
  );
};

export default OnlineCourseDetailsDescription;
