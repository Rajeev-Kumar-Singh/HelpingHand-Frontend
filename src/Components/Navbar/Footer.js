import React from "react";
import { Container, Grid, Typography, Link, Divider } from "@mui/material";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", padding: "60px 40px" }}>
      <Container maxWidth="md">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              About Us
            </Typography>
            <Divider sx={{ borderColor: "#fff", marginBottom: "20px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Helping Hand
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Impact
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Privacy Policy
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Program
            </Typography>
            <Divider sx={{ borderColor: "#fff", marginBottom: "20px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Education
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Health
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Women Empowerment
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Cow Seva
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Disaster Management
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Campaign
            </Typography>
            <Divider sx={{ borderColor: "#fff", marginBottom: "20px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Siksha Sbka Adhikar
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Health is Wealth
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Taiyari Kal Ki
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Swabhiman
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    She Can Fly
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Get Involved
            </Typography>
            <Divider sx={{ borderColor: "#fff", marginBottom: "20px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Individual Support
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Corporate Partnership
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    School Partnership
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Volunteers
                  </Link>
                </Typography>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  <Link href="#" color="inherit" underline="none">
                    Careers
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
