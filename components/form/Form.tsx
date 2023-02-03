import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography, Link } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import { useForm } from "react-hook-form";

import { AxiosResponse } from "axios";

import style from "../../styles/ColorExpresion.module.css";
import tesloApi from "../../api/tesloApi";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  path: string;
}

type FormData = {
  email: string;
  nombre: string;
  apellido: string;
  fecha: string;
  check1: boolean;
  check2: boolean;
};

export const Form = ({ path }: Props) => {
  const [fecha, setfecha] = useState<Dayjs | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const OnSendData = async (data: FormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "35px",
          fontWeight: "bold",
          padding: "25px 0",
        }}
      >
        <Typography sx={{ fontWeight: "700" }} className={`${style.orangeLine}`} variant="h6">
          LOS PRODUCTOS QUE BUSCABAS, CON EL DESCUENTO QUE QUERÍAS
        </Typography>
        <Container>
          <Box sx={{ marginTop: "40px" }}>
            <form onSubmit={handleSubmit(OnSendData)}>
              <Typography align="left" variant="body2">
                NOMBRE
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="nombre"
                variant="outlined"
                {...register("nombre", {
                  required: "Este campo es requerido...",
                })}
                required
              />
              <Typography align="left" variant="body2">
                APELLIDO
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="apellido"
                variant="outlined"
                {...register("apellido", {
                  required: "Este campo es requerido...",
                })}
                required
              />
              <Typography align="left" variant="body2">
                E-MAIL
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="email"
                variant="outlined"
                {...register("email", {
                  required: "Este campo es requerido...",
                })}
                required
              />
              <Typography sx={{ marginBottom: "5px" }} align="left" variant="body2">
                FECHA DE NACIMIENTO
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={fecha}
                  onChange={(newValue) => {
                    setfecha(newValue);
                  }}
                  renderInput={(params) => <TextField sx={{ width: "100%" }} {...params} required />}
                />
              </LocalizationProvider>
              <FormControlLabel
                sx={{ marginBottom: "25px", width: "100%", marginTop: "25px" }}
                control={
                  <Checkbox
                    id="check1"
                    defaultChecked
                    sx={{
                      color: "#f93",
                      "&.Mui-checked": {
                        color: "#f93",
                      },
                    }}
                    {...register("check1")}
                  />
                }
                label="Deseo recibir promociones y noticias de Natura por e-mail y SMS"
              />
              <FormControlLabel
                sx={{ marginBottom: "25px", width: "100%" }}
                control={
                  <Checkbox
                    id="check2"
                    defaultChecked
                    sx={{
                      color: "#f93",
                      "&.Mui-checked": {
                        color: "#f93",
                      },
                    }}
                    {...register("check2", {
                      required: "Este campo es requerido...",
                    })}
                    required
                  />
                }
                label="Confirmo ser mayor de 18 años y estoy de acuerdo con la Política de Privacidad y Condiciones de Uso."
              />
              <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
                <Button
                  type="submit"
                  sx={{
                    background: "#f93",
                    fontSize: "1rem",
                    "&:hover": { background: "rgb(255,124,52)" },
                  }}
                  variant="contained"
                >
                  QUIERO MI DESCUENTO
                </Button>
              </Box>
              <Box sx={{ width: "100%", marginTop: "25px" }}>
                <Typography align="right" variant="body2">
                  Al registrarme, acepto la
                  <Link target="_blank" underline="none">
                    Política de privacidad
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
};
