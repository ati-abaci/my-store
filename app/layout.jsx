"use client";
import Header from "@/components/Header";
import ReduxProvider from "@/components/ReduxProvider";
import { CssBaseline } from "@mui/material";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#030D27" }}>
        <CssBaseline />
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
