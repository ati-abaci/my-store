"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function ShopButton() {
  const items = useSelector((state) => state.cart.items);

  const count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <IconButton component={Link} href="/cart" sx={{ color: "white" }}>
      <Badge badgeContent={count} color="primary" overlap="circular">
        <ShoppingBagOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
