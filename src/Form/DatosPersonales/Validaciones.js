export const ValidarNombre = (nombre) => {
	const length = nombre.length;

	if (length === 0) {
		return null;
	} else if (length > 3 && length < 50) {
		return true;
	} else {
		return false;
	}
};

export const ValidarApellido = (apellido) => {
	const length = apellido.length;

	if (length === 0) {
		return null;
	} else if (length >= 3 && length < 50) {
		return true;
	} else {
		return false;
	}
}

export const ValidarTelefono = (telefono) => {
	const length = telefono.length;

	if (length === 0) {
		return null;
	} else if (length >= 8 && length < 20) {
		return true;
	} else {
		return false;
	}
}
