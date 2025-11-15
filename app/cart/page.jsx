"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/redux/CartSlice";
import CloseIcon from "@mui/icons-material/Close";

export default function CartPage() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => {
    const numeric = parseFloat(String(item.price).replace("$", ""));
    return sum + (isNaN(numeric) ? 0 : numeric) * (item.quantity || 1);
  }, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#111827",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: 600 }}
        >
          Your Cart
        </Typography>

        {items.length === 0 ? (
          <Typography sx={{ textAlign: "center", color: "white" }}>
            Your cart is empty.
          </Typography>
        ) : (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      position: "relative",
                      borderRadius: 1,
                      overflow: "hidden",
                      bgcolor: "#111827",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 80px, 80px" // ADDED SIZES PROP
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
                      {item.category}
                    </Typography>
                    <Typography sx={{ mt: 0.5 }}>
                      {item.price}{" "}
                      {item.quantity && item.quantity > 1
                        ? `× ${item.quantity}`
                        : ""}
                    </Typography>
                  </Box>

                  <IconButton
                    onClick={() => handleRemove(item.id)}
                    sx={{ color: "white" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 4, borderColor: "white" }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">${total.toFixed(2)}</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button variant="outlined" color="error" onClick={handleClear}>
                Clear Cart
              </Button>
              <Button variant="contained" color="success">
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
