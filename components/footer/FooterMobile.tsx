import {
  Box,
  Typography,
  Link,
  Divider,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";

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
import Image from "next/image";

import style from "../../styles/Footer.module.css";

export const FooterMobile = () => {
  const Pagos = [visa, mastercard, americaExpress, dinnersClub, cmr, presto, redcompra, mercadoPago, seloConfianca];
  return (
    <>
      <Box>
        <Box
          sx={{
            borderTop: ".0625rem solid #eaeaea",
            borderBottom: ".0625rem solid #eaeaea",
            padding: "1.2rem",
          }}
        >
          <Link
            className={`${style.footerItem}`}
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
            <ArrowForwardIosOutlinedIcon
              sx={{
                fontSize: "14px",
                color: "rgb(255, 153, 51)",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            borderTop: ".0625rem solid #eaeaea",
            borderBottom: ".0625rem solid #eaeaea",
            padding: "1.2rem",
          }}
        >
          <Link
            className={`${style.footerItem}`}
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
            <ArrowForwardIosOutlinedIcon
              sx={{
                fontSize: "14px",
                color: "rgb(112, 112, 112)",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            padding: "1.2rem",
            borderTop: ".0625rem solid #eaeaea",
            borderBottom: ".0625rem solid #eaeaea",
          }}
        >
          <Link
            className={`${style.footerItem}`}
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
            <ArrowForwardIosOutlinedIcon
              sx={{
                fontSize: "14px",
                color: "rgb(112, 112, 112)",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            padding: "1.2rem",
            borderTop: ".0625rem solid #eaeaea",
            borderBottom: ".0625rem solid #eaeaea",
          }}
        >
          <Link
            className={`${style.footerItem}`}
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
            <ArrowForwardIosOutlinedIcon
              sx={{
                fontSize: "14px",
                color: "rgb(112, 112, 112)",
              }}
            />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          boxShadow: "1px 1px 25px rgb(0 0 0 / 20%)",
          display: "flex",
          position: "sticky",
          bottom: 0,
          zIndex: 999,
          background: "#fff !important",
          padding: "1rem",
        }}
      >
        <Box sx={{ maxWidth: "75rem", margin: "0 auto", display: "flex" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginRight: "5rem" }}>
            <HomeOutlinedIcon
              sx={{
                fontSize: "1.2rem",
                marginRight: "5px",
              }}
            />
            <Typography sx={{ fontWeight: "700", marginRight: "10px", fontSize: ".8rem" }} color="#000">
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
        </Box>
      </Box>
      <footer>
        <Box sx={{ backgroundColor: "#2d323a", padding: "2rem 0" }}>
          <Container>
            <Grid container sx={{ margin: "1.25rem 0", width: "100%" }}>
              <Grid
                item={true}
                lg={12}
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Accordion
                  sx={{
                    background: "transparent",
                    width: "100%",
                    boxShadow: "none !important",
                  }}
                >
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Box
                      textAlign="center"
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography textAlign="center" color="#fff">
                        SOBRE NATURA
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Sobre Nosotros
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Sustentabilidad
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Trabaja con nosotros
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    background: "transparent",
                    width: "100%",
                    boxShadow: "none !important",
                  }}
                >
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Box
                      textAlign="center"
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography textAlign="center" color="#fff">
                        AYUDA
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Encuentra Natura
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Ayuda y Contacto
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Quiero ser Consultora
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    background: "transparent",
                    width: "100%",
                    boxShadow: "none !important",
                  }}
                >
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Box
                      textAlign="center"
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography textAlign="center" color="#fff">
                        SOPORTE
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Términos y Condiciones
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Políticas de Privacidad
                        </Link>
                      </li>
                      <li
                        style={{
                          padding: ".25rem 0",
                          lineHeight: "1.5em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link underline="none" sx={{ color: "#b4b4b4", cursor: "pointer" }}>
                          Ética y Compliance
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid
                item={true}
                lg={12}
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  padding: "1rem 0",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Link sx={{ marginRight: "5px" }}>
                    <Image alt="google play" src={googlePlay} height={30} width={97} />
                  </Link>
                  <Link>
                    <Image alt="google play" src={appStore} height={30} width={97} />
                  </Link>
                </Box>
              </Grid>
              <Grid
                item={true}
                lg={12}
                sx={{
                  width: "100%",
                  display: "flex",
                  padding: ".5rem 0",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    color="#fff"
                    textAlign="center"
                    sx={{
                      lineHeight: "1.7",
                      fontSize: ".75rem",
                    }}
                  >
                    Pague con seguridad
                  </Typography>
                  <Box sx={{ marginTop: "25px" }}>
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
                </Box>
              </Grid>
              <Grid
                item={true}
                lg={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ lineHeight: "1.7", fontSize: ".75rem" }} color="#b4b4b4">
                  © 2022 Natura Cosméticos S.A RUT: 96.575.280-3. Todos los derechos reservados.
                </Typography>
                <Typography sx={{ lineHeight: "1.7", fontSize: ".75rem" }} color="#b4b4b4">
                  Todos los precios y condiciones de este sitio son válidos sólo para compras en el sitio. Precios y
                  promociones pueden cambiar sin previo aviso. Destacamos que los precios previstos en el sitio
                  prevalecen a los demás anunciados en otros medios de comunicación y/o sitios de búsquedas. El precio
                  válido es el que se informa en el carro de compras. Imágenes son sólo ilustrativas.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
};
