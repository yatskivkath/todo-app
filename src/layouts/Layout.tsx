import React from "react";
import { Container, Box } from "@mui/material";
import { Header } from "./Header/Header";

import bgImage from "../assets/bg-desktop-dark.jpg";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.common.white,
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat no-repeat",
        backgroundSize: "100% auto",
        backgroundImage: `url(${bgImage})`,
      })}
    >
      <Container
        disableGutters
        sx={(theme) => ({
          height: "100%",
          py: 10,
          [theme.breakpoints.down("sm")]: { py: 6, px: 3 },
        })}
      >
        <Header />
        <Box
          sx={(theme) => ({
            maxWidth: "540",
            [theme.breakpoints.down("sm")]: {
              maxWidth: "320",
            },
          })}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};
