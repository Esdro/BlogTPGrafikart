import {useState} from "react";

export function useToggle(initalValue= false) {
    const [state, setState] = useState(initalValue)

    const toggle = () => setState((prevState) => !prevState)


    return [state, toggle]
}