"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/system";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Link from "next/link";

export default function CardItem({ title, image, category, price, id }) {
  return (
    <Box>
      <Card
        sx={{
          height: 200,
          width: 280,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <CardActionArea component={Link} href={`/products/${id}`}>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent sx={{ py: "10px", bgcolor: "#0C2B4E", color: "white" }}>
            <Typography
              variant="body2"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "1em",
                }}
              >
                <FormatListBulletedIcon sx={{ fontSize: "1rem" }} /> {category}
              </Typography>
              <Typography>{price}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
