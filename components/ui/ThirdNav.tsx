import { AppBar, Box, Link, Toolbar } from "@mui/material";

import style from "../../styles/Nav.module.css";

export const ThirdNav = () => {
  return (
    <>
      <Box sx={{ background: "#fff", position: "inherit", padding: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            margin: "0 auto",
            width: "100%",
            maxWidth: "75rem",
            justifyContent: "space-between",
            boxShadow: "none !important",
          }}
        >
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              PROMOCIONES
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              NAVIDAD 🎄
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              CUIDADOS DIARIOS
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              PERFUMERÍA
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              MAQUILLAJE
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              CABELLO
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              ROSTRO
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              VEGANOS
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              REPUESTOS
            </Link>
          </Box>
          <Box>
            <Link sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }} underline="none">
              OUTLET
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
