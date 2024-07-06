import React from "react";
import { AppBar, Toolbar, Typography, Link, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoIcom from "../../assets/Logo/logoimage.png";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#F6F5CF" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={LogoIcom}
            alt="Helping Hand Logo"
            style={{ width: 140, height: 140 }}
          />
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Helping Hand
          </Typography>
        </div>
        <nav sx={{ display: "flex", alignItems: "flex-end" }}>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
          >
            About Us
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
          >
            Program
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
          >
            Campaigns
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
          >
            Get Involved
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
          >
            Contact Us
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
