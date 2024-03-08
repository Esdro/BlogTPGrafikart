
import {useEffect, useState} from "react";
import {useRefSync} from "./RefSync.jsx";


/**
 * Custom fetcData Hook in React to fetch data
 * @param {string} url
 * @param {object} options
 * @returns {unknown[]}
 */
export  function useFetchData(url, options) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const optionsRef = useRefSync(options)

    useEffect(() => {
        fetch(url, {
            ...optionsRef.current,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                ...optionsRef?.headers
            }
        }).then(res => res.json()).then(data => {
            setError(false);
            setLoading(false)
            setData(data)
        }).catch((e) => setError(e.toString())).finally(() => setLoading(false))
    }, [url, options])



    return [loading, data, error]

}