"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import ShopButton from "./ShopButton";
import Link from "next/link";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1F2937" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Image src="/navlogo.png" width={80} height={80} alt="navlogo" />
          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}
          >
            <ShopButton />

            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Travis Howard"
                  sx={{ width: "32px", height: "32px" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
