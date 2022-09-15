import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
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
      <main>
        <Container sx={{ pb: 8 }} maxWidth="md">
          {children}
        </Container>
      </main>
      <Box component={"footer"} sx={{ bgcolor: "#f5f5f5", padding: 2 }}>
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
