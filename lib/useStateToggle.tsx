import { useReducer } from "react";

const handleToggleState = (prevState: boolean) => !prevState;

// Simple boolean toggler for state, returns current value of boolean and toggler function

const useStateToggle = (initialState: boolean) => {
	const [state, toggleState] = useReducer(handleToggleState, initialState);
	return [state, toggleState] as const;
}

export default useStateToggle;