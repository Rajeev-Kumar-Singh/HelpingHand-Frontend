import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoIcom from "../../assets/Logo/logoimage.png";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const menuItems = {
    aboutUs: ["Helping Hand", "Impact", "Privacy Policy"],
    program: [
      "Education",
      "Health",
      "Women Empowerment",
      "Cow Seva",
      "Disaster Management",
    ],
    campaigns: [
      "Siksha Sbka Adhikar",
      "Health is Wealth",
      "Taiyari Kal Ki",
      "Swabhiman",
      "She Can Fly",
    ],
    getInvolved: [
      "Individual Support",
      "Corporate Partnership",
      "School Partnership",
      "Volunteers",
      "Careers",
    ],
    contactUs: ["Contact Us", "FAQs"],
  };

  const renderMenu = (items) => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {items.map((item, index) => (
        <MenuItem key={index} onClick={handleMenuClose}>
          <Link href="#" color="inherit" underline="none">
            {item}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );

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
            onClick={(e) => handleMenuOpen(e, "aboutUs")}
          >
            About Us
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          {menuIndex === "aboutUs" && renderMenu(menuItems.aboutUs)}

          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
            onClick={(e) => handleMenuOpen(e, "program")}
          >
            Program
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          {menuIndex === "program" && renderMenu(menuItems.program)}

          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
            onClick={(e) => handleMenuOpen(e, "campaigns")}
          >
            Campaigns
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          {menuIndex === "campaigns" && renderMenu(menuItems.campaigns)}

          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
            onClick={(e) => handleMenuOpen(e, "getInvolved")}
          >
            Get Involved
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          {menuIndex === "getInvolved" && renderMenu(menuItems.getInvolved)}

          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{ color: "black", fontWeight: "bold", fontSize: 20, mr: 2 }}
            onClick={(e) => handleMenuOpen(e, "contactUs")}
          >
            Contact Us
            <IconButton size="medium" sx={{ color: "black" }}>
              <ArrowDropDownIcon fontSize="medium" />
            </IconButton>
          </Link>
          {menuIndex === "contactUs" && renderMenu(menuItems.contactUs)}
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
