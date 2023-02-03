import Image from "next/image";

import { Box, Typography, Link, Container, Grid } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import googlePlay from "./../../public/images/googlePlay.png";
import appStore from "./../../public/images/appStore.png";
import visa from "./../../public/images/visa.png";
import mastercard from "./../../public/images/mastercard.png";
import americaExpress from "./../../public/images/americaExpress.png";
import dinnersClub from "./../../public/images/dinnersClub.png";
import cmr from "./../../public/images/cmr.png";
import presto from "./../../public/images/presto.png";
import redcompra from "./../../public/images/redcompra.png";
import mercadoPago from "./../../public/images/mercadoPago.png";
import seloConfianca from "./../../public/images/seloConfianca.png";

import style from "../../styles/Footer.module.css";

export const Footer = () => {
  const Pagos = [
    visa,
    mastercard,
    americaExpress,
    dinnersClub,
    cmr,
    presto,
    redcompra,
    mercadoPago,
    seloConfianca,
  ];

  return (
    <>
      <Box
        sx={{
          boxShadow: "1px 1px 25px rgb(0 0 0 / 20%)",
          display: "flex",
          position: "sticky",
          bottom: 0,
          zIndex: 999,
          background: "#fff !important",
        }}
      >
        <Box sx={{ maxWidth: "75rem", margin: "0 auto", display: "flex" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "5rem" }}
          >
            <HomeOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                marginRight: "5px",
              }}
            />
            <Typography
              sx={{ fontWeight: "700", marginRight: "10px", fontSize: ".8rem" }}
              color="#000"
            >
              MI CONSULTOR:
            </Typography>
            <Link
              className={`${style.footerItem}`}
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#4a90e2",
                fontWeight: "700",
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": { color: "rgb(255, 153, 51)" },
              }}
            >
              Buscar Consultor
              <ArrowForwardIosOutlinedIcon
                sx={{
                  fontSize: "14px",
                  color: "#4a90e2",
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              borderLeft: ".0625rem solid #eaeaea",
              borderRight: ".0625rem solid #eaeaea",
              padding: ".9375rem",
            }}
          >
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              underline="none"
            >
              <HelpOutlineOutlinedIcon
                sx={{
                  fontSize: "1.4rem",
                  color: "rgb(255, 153, 51)",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "700",
                  marginRight: "10px",
                  fontSize: ".8rem",
                }}
                color="rgb(255, 153, 51)"
                variant="body2"
              >
                ¿Necesitas ayuda en línea?
              </Typography>
            </Link>
          </Box>
          <Box sx={{ padding: ".9375rem" }}>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              underline="none"
            >
              <PetsOutlinedIcon
                sx={{
                  fontSize: "1.2rem",
                  color: "rgb(255, 153, 51)",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "700",
                  marginRight: "10px",
                  fontSize: ".8rem",
                  "&:hover": { color: "rgb(255, 153, 51)" },
                }}
                color="rgb(112, 112, 112)"
                variant="body2"
              >
                Somos Cruelty Free
              </Typography>
            </Link>
          </Box>
          <Box sx={{ padding: ".9375rem" }}>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              underline="none"
            >
              <LocationOnOutlinedIcon
                sx={{
                  fontSize: "1.2rem",
                  color: "rgb(255, 153, 51)",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "700",
                  marginRight: "10px",
                  fontSize: ".8rem",
                  "&:hover": { color: "rgb(255, 153, 51)" },
                }}
                color="rgb(112, 112, 112)"
                variant="body2"
              >
                Encuentra Natura
              </Typography>
            </Link>
          </Box>
          <Box sx={{ padding: ".9375rem" }}>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              underline="none"
            >
              <DonutLargeOutlinedIcon
                sx={{
                  fontSize: "1.2rem",
                  color: "rgb(255, 153, 51)",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "700",
                  marginRight: "10px",
                  fontSize: ".8rem",
                  "&:hover": { color: "rgb(255, 153, 51)" },
                }}
                color="rgb(112, 112, 112)"
                variant="body2"
              >
                Ayuda y Contacto
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <footer>
        <Box position="relative">
          <Box
            sx={{
              padding: "2.125rem",
              textAlign: "left",
              backgroundColor: "#3a3a3a",
            }}
          >
            <Box sx={{ maxWidth: "75rem", margin: "0 auto" }}>
              <Container>
                <Grid container sx={{ margin: "1.25rem 0" }}>
                  <Grid
                    item={true}
                    lg={12}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ width: "12.5rem", float: "left" }}>
                        <Typography color="#fff" sx={{ fontSize: ".75rem" }}>
                          SOBRE NATURA
                        </Typography>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Sobre Nosotros
                            </Link>
                          </li>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Sustentabilidad
                            </Link>
                          </li>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Trabaja con nosotros
                            </Link>
                          </li>
                        </ul>
                      </Box>
                      <Box sx={{ width: "12.5rem", float: "left" }}>
                        <Typography color="#fff" sx={{ fontSize: ".75rem" }}>
                          AYUDA
                        </Typography>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Encuentra Natura
                            </Link>
                          </li>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Ayuda y Contacto
                            </Link>
                          </li>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Quiero ser Consultora
                            </Link>
                          </li>
                        </ul>
                      </Box>
                      <Box sx={{ width: "12.5rem", float: "left" }}>
                        <Typography color="#fff" sx={{ fontSize: ".75rem" }}>
                          SOPORTE
                        </Typography>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Términos y Condiciones
                            </Link>
                          </li>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Políticas de Privacidad
                            </Link>
                          </li>
                          <li
                            style={{ padding: ".25rem 0", lineHeight: "1.5em" }}
                          >
                            <Link
                              underline="none"
                              sx={{ color: "#b4b4b4", cursor: "pointer" }}
                            >
                              Ética y Compliance
                            </Link>
                          </li>
                        </ul>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        color="#fff"
                        sx={{
                          fontSize: ".75rem",
                          lineHeight: "1.875rem",
                          paddingBottom: "2.5rem",
                        }}
                      >
                        SOBRE NATURA
                      </Typography>
                      <Typography
                        color="#b4b4b4"
                        sx={{
                          lineHeight: "1.7",
                          fontSize: ".75rem",
                          marginBottom: "30px",
                        }}
                      >
                        Realiza tus pedidos de Natura en un sólo click
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Link
                          sx={{ marginRight: "5px" }}
                        >
                          <Image
                            alt="google play"
                            src={googlePlay}
                            height={30}
                            width={97}
                          />
                        </Link>
                        <Link>
                          <Image
                            alt="google play"
                            src={appStore}
                            height={30}
                            width={97}
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item={true}
                    lg={12}
                    sx={{ display: "flex", padding: "2rem 0" }}
                  >
                    <Box>
                      {Pagos.map((obj, i) => {
                        return (
                          <Image
                            key={i}
                            alt="forma pago"
                            src={obj}
                            width={70}
                            style={{ height: "auto", padding: "0 .5rem" }}
                          />
                        );
                      })}
                    </Box>
                  </Grid>
                  <Grid
                    item={true}
                    lg={12}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography
                      sx={{ lineHeight: "1.7", fontSize: ".75rem" }}
                      color="#b4b4b4"
                    >
                      © 2022 Natura Cosméticos S.A RUT: 96.575.280-3. Todos los
                      derechos reservados.
                    </Typography>
                    <Typography
                      sx={{ lineHeight: "1.7", fontSize: ".75rem" }}
                      color="#b4b4b4"
                    >
                      Todos los precios y condiciones de este sitio son válidos
                      sólo para compras en el sitio. Precios y promociones
                      pueden cambiar sin previo aviso. Destacamos que los
                      precios previstos en el sitio prevalecen a los demás
                      anunciados en otros medios de comunicación y/o sitios de
                      búsquedas. El precio válido es el que se informa en el
                      carro de compras. Imágenes son sólo ilustrativas.
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};
