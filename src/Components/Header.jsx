import { useState, useCallback, memo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../assets/logo-2.png";

const Header = ({
  aboutRef,
  contactRef,
  portfolioRef,
  serviceRef,
  scrollToSection,
}) => {
  const pages = [
    { page: "Home", ref: "/" },
    { page: "Services", ref: serviceRef },
    { page: "Portfolio", ref: portfolioRef },
    { page: "About", ref: aboutRef },
    { page: "Contact", ref: contactRef },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handlescrollInto = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

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
            <img className="mr-2 w-[35px]" src={logo} alt="logo" />
            OFA <span className="text-secondary">PSD</span>
          </Typography>

          {/* Menu for mobile */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
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
                <MenuItem
                  key={page.page}
                  onClick={() => {
                    handlescrollInto(page.ref);
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => handlescrollInto(page.ref)}
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
                {page.page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default memo(Header);
