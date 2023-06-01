import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
	ValidarApellido,
	ValidarNombre,
	ValidarTelefono,
} from "./Validaciones";

const DatosPersonales = ({ updateStep }) => {
	const [name, setName] = useState({ value: "", valid: null });
	const [lastName, setLastName] = useState({ value: "", valid: null });
	const [phone, setPhone] = useState({ value: "", valid: null });

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
				updateStep(2);
			}}>
			<TextField
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={name.value}
				onChange={(input) => {
					const nombre = input.target.value;
					const valid = ValidarNombre(nombre);
					setName({ nombre, valid });
				}}
				error={name.valid === false}
        onBlur={(input) => ValidarNombre(input.target.value)}
        helperText={name.valid === false &&
        "Ingresa al menos tres caracteres"}
			/>
			<TextField
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={lastName.value}
				onChange={(input) => {
					const apellido = input.target.value;
					const valid = ValidarApellido(apellido);
					setLastName({ apellido, valid });
				}}
				error={lastName.valid === false}
        onBlur={(input) => ValidarApellido(input.target.value)}
        helperText={lastName.valid === false &&
          "Ingresa al menos tres caracteres"}
			/>
			<TextField
				label="Número telefónico"
				variant="outlined"
				fullWidth
				margin="dense"
				type="number"
				inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
				value={phone.value}
				onChange={(input) => {
					const telefono = input.target.value;
					const valid = ValidarTelefono(telefono);
					setPhone({ telefono, valid });
				}}
				error={phone.valid === false}
				onBlur={(input) => ValidarTelefono(input.target.value)}
        helperText={phone.valid === false &&
          "Ingresa mínimo 8 números y como máximo 20"}
			/>
			<Button variant="contained" type="submit">
				Siguiente
			</Button>
		</Box>
	);
};

export default DatosPersonales;
