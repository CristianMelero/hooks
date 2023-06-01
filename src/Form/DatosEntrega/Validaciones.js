export const ValidarDireccion = (direccion) => {
	const length = direccion.length;

	if (length === 0) {
		return null;
	} else if (length >= 4 && length < 50) {
		return true;
	} else {
		return false;
	}
};

export const ValidarCiudad = (ciudad) => {
	const length = ciudad.length;

	if (length === 0) {
		return null;
	} else if (length >= 4 && length < 50) {
		return true;
	} else {
		return false;
	}
}

export const ValidarProvincia = (provincia) => {
	const length = provincia.length;

	if (length === 0) {
		return null;
	} else if (length >= 4 && length < 50) {
		return true;
	} else {
		return false;
	}
}
