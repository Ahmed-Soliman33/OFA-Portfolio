import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Adb as AdbIcon } from "@mui/icons-material";
import logo from "../assets/logo-2.png";

const pages = [
  "Home",
  "Services",
  "Portfolio",
  "About",
  /*"Courses",*/ "Contact",
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      sx={{
        padding: { sm: "0px 20px", md: "0px 80px" },
        bgcolor: "transparent",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "end",
            }}
          >
            <Avatar className="mr-2" src={logo} alt="logo" />
            OFA <span className="text-secondary">PSD</span>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  borderRadius: 0,
                  transition: ".6s",
                  my: 2,
                  mx: 1,
                  color: "white",
                  fontWeight: 600,
                  "&:hover": {
                    color: "#6535F9",
                    borderBottom: "1px solid #6535F9",
                    background: "transparent",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
