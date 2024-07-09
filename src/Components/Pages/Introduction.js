import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Grid, Container, Button } from "@mui/material";
import HandImg from "../../assets/IntroductionPage/handphoto.jpg";
import PlantImg from "../../assets/IntroductionPage/plantImg.jpg";
import CowImg from "../../assets/IntroductionPage/cowImg.jpg";

function Introduction() {
  const images = [
    { src: HandImg, alt: "Helping hand photo" },
    { src: PlantImg, alt: "Planting tree photo" },
    { src: CowImg, alt: "Cow in a field photo" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 2, color: "green", fontWeight: "bold" }}
          >
            Welcome to Helping Hand
          </Typography> */}
          <Typography
            variant="body1"
            component="p"
            sx={{ mb: 4, fontSize: 20 }}
          >
            Helping Hand is a non-governmental organization (NGO) dedicated to
            lending a hand to those in need. Our mission is to provide support
            to poor people, orphan children, and vulnerable communities,
            empowering them to break the cycle of poverty and build a brighter
            future.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ mb: 2, color: "green" }}
          >
            Our Focus Areas:
          </Typography>
          <Typography
            variant="body1"
            component="ul"
            sx={{ mb: 4, fontSize: 20 }}
          >
            <li>
              Education: We believe that education is the key to unlocking a
              child's potential. Our organization provides educational support
              to orphan children, ensuring they receive the necessary resources
              to succeed in school and beyond.
            </li>
            <li>
              Home and Shelter: A safe and secure home is essential for a
              child's well-being. We provide shelter and care to orphan
              children, giving them a sense of belonging and stability.
            </li>
            <li>
              Environmental Conservation: We recognize the importance of
              preserving our planet for future generations. Our tree planting
              initiatives aim to reduce carbon footprint, promote eco-friendly
              practices, and protect biodiversity.
            </li>
            <li>
              Animal Welfare: At Helping Hand, we believe that all living beings
              deserve compassion and care. Our organization works tirelessly to
              protect and preserve animal life, with a special focus on cows and
              other animals.
            </li>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ mb: 2, color: "green" }}
          >
            Our Vision:
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ mb: 4, fontSize: 20 }}
          >
            To create a world where every individual has access to education, a
            safe home, and a healthy environment. We envision a society where
            animals are treated with kindness and respect, and where everyone
            has the opportunity to thrive.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="h5"
            sx={{ mb: 2, color: "green" }}
          >
            Join Us:
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ mb: 4, fontSize: 20 }}
          >
            By supporting Helping Hand, you can make a real difference in the
            lives of those who need it most. Together, we can create a ripple of
            kindness that spreads far and wide.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2, bgcolor: "green" }}
          >
            Learn More
          </Button>
          <Button variant="outlined" color="primary">
            Donate Now
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Carousel animation="slide" indicators={false}>
            {images.map((image, i) => (
              <Paper
                key={i}
                elevation={3}
                sx={{ borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", height: "700px", objectFit: "cover" }}
                />
              </Paper>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduction;
