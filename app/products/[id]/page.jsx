"use client";

import { use } from "react";
import { Box, Container, Typography, Button, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import CardItem from "@/components/CartItem";
import products from "@/data/products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/CartSlice";

export default function ProductPage({ params }) {
  const { id } = use(params);

  const dispatch = useDispatch();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#0B1724",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Product not found.</Typography>
      </Box>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
      })
    );
  };

  const similarProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#111827",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            mb: 4,
            "& a": {
              color: "white",
              textDecoration: "none",
            },
          }}
        >
          <Link href="/">Home</Link>
          <Typography color="white">Product</Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            gap: 4,
            mb: 6,
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {product.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {product.category}
            </Typography>

            <Typography sx={{ color: "white" }}>
              Take your skills to the next level with this course.
            </Typography>

            <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
              {product.price}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                sx={{ bgcolor: "#0D9488", color: "white", border: "none" }}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Similar Products
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
          >
            {similarProducts.map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
                price={item.price}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
