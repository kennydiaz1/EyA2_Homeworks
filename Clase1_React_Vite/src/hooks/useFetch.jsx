import { useEffect, useState } from "react";
export const useFetch = (url) => {

    const [state, setState] = useState({
         data: null, 
         loading: true, 
         error: null 
    });

    const getFetch = async () => {
        const api = await fetch(url);
        const data = await api.json();

        setState({
            data: data,
            loading: false,
            error: null
        });
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return{ 
        ...state
    }
}