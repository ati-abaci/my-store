"use client";
import Header from "@/components/Header";
import ReduxProvider from "@/components/ReduxProvider";
import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F4F4F4" }}>
        <CssBaseline />
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
