import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", padding: "60px 40px" }}>
      <Container maxWidth="md">
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
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
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Programs
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
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
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
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
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
        <Divider sx={{ borderColor: "#fff", margin: "40px 0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          <div>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", mb: 1, fontSize: 18 }}
            >
              Helping Hand
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              A- 38, Pocket 4, Phi 2
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Ground Floor, Greater Noida - 201310
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email:{" "}
              <Link href="mailto:rajeevsinghrajput38@gmail.com" color="inherit">
                rajeevsinghrajput38@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2">Contact number: 8210755913</Typography>
          </div>
          <div>
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", fontSize: 36 }}
            >
              <Facebook fontSize="inherit" />
            </IconButton>
            <IconButton
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", fontSize: 36 }}
            >
              <Twitter fontSize="inherit" />
            </IconButton>
            <IconButton
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", fontSize: 36 }}
            >
              <YouTube fontSize="inherit" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", fontSize: 36 }}
            >
              <Instagram fontSize="inherit" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", fontSize: 36 }}
            >
              <LinkedIn fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
