import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";
import { useContext } from "react";
import { CounterContext } from "./context";

function App() {
	const counterData = useContext(CounterContext);
	return (
		<MainSpace>
			<ImageSpace />
			<FormSpace>
				<Form />
				<div>
					<Button onClick={() => counterData.resta()}> - </Button>
					<Button onClick={() => counterData.suma()}> + </Button>
				</div>
			</FormSpace>
		</MainSpace>
	);
}

export default App;
