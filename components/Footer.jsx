import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#020c22",
        color: "#808080ff",
        px: 5,
      }}
    >
      <Image src={"/navlogo.png"} width={80} height={80} alt="navlogo" />
      <Typography>Copyright © 2024.All rights reserved.</Typography>
    </Box>
  );
}
