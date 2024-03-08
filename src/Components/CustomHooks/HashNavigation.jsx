import {useEffect, useState} from "react";

export default function useHashNavigation () {


    const [page, setPage] = useState(window.location.hash);

    const handlePageChange = () => {
        setPage(location.hash)
    }

    useEffect(() => {
     window.addEventListener('hashchange', handlePageChange);
     return () => {
         window.removeEventListener('hashchange', handlePageChange);
     }
    }, [])

    // je convertis en string la chaine url et enlève le hash
    const defaultUrl = page.toString().replace('#', '');

    // j'essaie de découper à chaque occurrence de ' : '
    const paramSplit = page.toString().split(":");

    // je formate le bon page
    const formattedPage = defaultUrl.includes(':') ? paramSplit[0] : defaultUrl || 'home'

    // on retourne les deux paramètres
    return {page: formattedPage , param: paramSplit[1] || null}
}