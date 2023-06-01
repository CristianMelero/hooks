import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./Step";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

// validaciones
import { ValidarEmail, ValidarPassword } from "./DatosUsuario/Validaciones";
import {
	ValidarNombre,
	ValidarApellido,
	ValidarTelefono,
} from "./DatosPersonales/Validaciones";
import {
	ValidarDireccion,
	ValidarCiudad,
	ValidarProvincia,
} from "./DatosEntrega/Validaciones";

const Form = () => {
	const [step, setStep] = useState(0);
	const [pasos, setPasos] = useState({});

	useEffect(() => {}, [step]);

	// useEffect(async () => {
	// 	try {
	// 		const data = await (
	// 			await fetch("https://jsonplaceholder.typicode.com/posts")
	// 		).json();
	// 		console.log(data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }, []);

	//step = 0 --> <DatosUsuario />
	//step = 1 --> <DatosPersonales />
	//step = 2 --> <DatosEntrega />
	//step = 3 --> <Complete />

	// const selectStep = () => {
	// 	switch (step) {
	// 		case 0:
	// 			return <DatosUsuario />;
	// 			break;
	// 		case 1:
	// 			return <DatosPersonales />;
	// 			break;
	// 		case 2:
	// 			return <DatosEntrega />;
	// 			break;
	// 		default:
	// 			return <Complete />;
	// 			break;
	// 	}
	// };

	// const steps = [
	// 	<DatosUsuario />,
	// 	<DatosPersonales />,
	// 	<DatosEntrega />,
	// 	<Complete />,
	// ];

	const updateStep = (step) => {
		setStep(step);
	};

	const stepsObjeto = {
		0: <DatosUsuario updateStep={updateStep} />,
		1: <DatosPersonales updateStep={updateStep} />,
		2: <DatosEntrega updateStep={updateStep} />,
		3: <Complete updateStep={updateStep} />,
	};

	const onSubmit = (e) => {
		e.prevenDefault();
		let newStep = step + 1;
		setStep(newStep);
	};

	const handleChange = (element, position, currentStep, validator) => {
		const value = element.target.value;
		const valid = validator(value);
		console.log(value);
		console.log("position ", position);
		console.log("currentStep ", currentStep);
		console.log("validator ", validator);
	};

	const stepsFlow = {
		0: {
			inputs: [
				{
					label: "Correo electrónico",
					type: "email",
					value: "",
					valid: null,
					onChange: handleChange,
					helperText: "Ingresa un correo electrónico válido.",
					validator: ValidarEmail,
				},
				{
					label: "Contraseña",
					type: "password",
					value: "",
					valid: null,
					onChange: handleChange,
					helperText: "Ingresa un correo electrónico válido.",
					validator: ValidarPassword,
				},
			],
			buttonText: "Siguiente",
			onSubmit,
		},
		1: {
			inputs: [
				{
					label: "Correo electrónico",
					type: "email",
					value: "",
					valid: null,
					onChange: handleChange,
					helperText: "Ingresa un correo electrónico válido.",
					validator: ValidarEmail,
				},
				{
					label: "Contraseña",
					type: "password",
					value: "",
					valid: null,
					onChange: handleChange,
					helperText: "Ingresa un correo electrónico válido.",
					validator: ValidarPassword,
				},
			],
			buttonText: "Siguiente",
			onSubmit,
		},
	};

	return (
		<Box
			sx={{
				padding: "30px",
				display: "flexbox",
				flexDirection: "column",
			}}>
			<LogoSpace>
				<Img src={"/favicon.png"} />
				<Typography variant="h3">AluraFood</Typography>
			</LogoSpace>
			<FormSpace>
				{step < 3 && <Stepper step={step} />}
				{/* {stepsObjeto[step]} */}
				<Step data={stepsFlow[step]} step={step} />
				{/* {selectStep()}
				{steps[step]} */}
			</FormSpace>
		</Box>
	);
};

export default Form;
