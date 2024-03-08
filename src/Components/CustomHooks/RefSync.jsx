import {useRef} from "react";

/**
 * Ref options pour des valeurs mutables
 * @param{object} data
 * @returns {React.MutableRefObject<unknown>}
 */
export function useRefSync(data) {

    const dataRef = useRef(data);

    dataRef.current = data;

    return dataRef;

}