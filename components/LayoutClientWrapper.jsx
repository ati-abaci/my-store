"use client";
import Header from "@/components/Header";
import ReduxProvider from "@/components/ReduxProvider";
import { CssBaseline, Box } from "@mui/material";
import Footer from "@/components/Footer";

export default function LayoutClientWrapper({ children }) {
  return (
    <>
      <CssBaseline />
      <ReduxProvider>
        <Header />

        <Box
          component="main"
          sx={{ backgroundColor: "#030D27", minHeight: "100vh" }}
        >
          {children}
        </Box>
        <Footer />
      </ReduxProvider>
    </>
  );
}
