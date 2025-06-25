import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const Children = () => {
  const [children, setchildren] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then((res) => {
        setchildren(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Box sx={{ marginTop: 4, padding: 2 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        color="black"
      >
        List of Children
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {children.map((child) => (
          <Grid item xs={12} sm={6} md={4} key={child._id}>
            <Link to={`/children/${child._id}`} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  padding: 3,
                  background: "linear-gradient(135deg, #fce3e3, #f9b1b1)",
                  borderRadius: "20px",
                  boxShadow: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img
                    src={child.photo}
                    alt={child.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      marginBottom: "1rem"
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {child.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Age: {child.age}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Children;
