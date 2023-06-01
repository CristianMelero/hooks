import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarCiudad, ValidarDireccion, ValidarProvincia } from "./Validaciones";

const DatosEntrega = ({ updateStep }) => {
	const [address, setAddress] = useState({ value: "", valid: null });
	const [city, setCity] = useState({ value: "", valid: null });
	const [province, setProvince] = useState({ value: "", valid: null });

	return (
		<Box
			component="form"
			autocomplete="off"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
			onSubmit={(e) => {
				e.preventDefault();
				updateStep(3);
			}}>
			<TextField
				label="Dirección"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={address.value}
				onChange={(input) => {
					const direccion = input.target.value;
					const valid = ValidarDireccion(direccion);
					setAddress({ direccion, valid });
				}}
				error={address.valid === false}
				onBlur={(input) => ValidarDireccion(input.target.value)}
				helperText={
					address.valid === false &&
					"Ingresa al menos cuatro caracteres y menos de 50"
				}
			/>
			<TextField
				label="Ciudad"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={city.value}
				onChange={(input) => {
					const ciudad = input.target.value;
					const valid = ValidarCiudad(ciudad);
					setCity({ ciudad, valid });
				}}
				error={city.valid === false}
				onBlur={(input) => ValidarCiudad(input.target.value)}
				helperText={
					city.valid === false &&
					"Ingresa al menos cuatro caracteres y menos de 50"
				}
			/>
			<TextField
				label="Estado/Provincia"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={province.value}
				onChange={(input) => {
					const provincia = input.target.value;
					const valid = ValidarProvincia(provincia);
					setProvince({ provincia, valid });
				}}
				error={province.valid === false}
				onBlur={(input) => ValidarProvincia(input.target.value)}
				helperText={
					province.valid === false &&
					"Ingresa al menos cuatro caracteres y menos de 50"
				}
			/>
			<Button variant="contained" type="submit">
				Crear cuenta
			</Button>
		</Box>
	);
};

export default DatosEntrega;
