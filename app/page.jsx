"use client";
import {
  Box,
  Button,
  colors,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ActionAreaCard from "@/components/CartItem";
import products from "@/data/products.json";
import CardItem from "@/components/CartItem";

export default function page() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          bgcolor: "#1F2937",
          paddingBottom: "100px",
        }}
      >
        <Box sx={{ mt: "50px" }}>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              backgroundImage:
                "linear-gradient(90deg, rgba(89, 230, 209, 1) 0%, rgba(15, 122, 113, 1) 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            All Your Digital Products
          </Typography>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage:
                "linear-gradient(90deg, rgba(89, 230, 209, 1) 0%, rgba(15, 122, 113, 1) 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            Is One Click Away.
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ color: "#ffff" }}>
          Start Exploring State of the Art Assest Now!
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ bgcolor: "#0D9488" }} variant="contained">
            Get Started
          </Button>
          <Button
            sx={{ borderColor: "#0D9488", color: "#0D9488" }}
            variant="outlined"
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "white", fontWeight: "bold", marginTop: "10px" }}
            variant="h6"
          >
            Brand New
          </Typography>
          <Link
            href={"/products"}
            style={{
              color: "white",
              display: "flex",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            View All Collection
            <ArrowRightAltIcon />
          </Link>
        </Box>
        <Grid container spacing={1} mt={5} mb={5}>
          {products.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardItem
                id={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
