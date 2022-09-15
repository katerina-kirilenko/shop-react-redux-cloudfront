import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "~/components/MainLayout/components/Header";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      © 2022 Ekaterina Kirilenko, All rights reserved
    </Typography>
  );
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <Container sx={{ pb: 8 }} maxWidth="md">
          {children}
        </Container>
      </main>
      <Box
        component={"footer"}
        sx={{
          bgcolor: "#f5f5f5",
          padding: 2,
          flex: "0 0 auto",
        }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Thank you for your purchase!
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default MainLayout;
