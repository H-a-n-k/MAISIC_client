import { useEffect, useState } from "react";
import CallApi from "./callApi";
import HttpRespose from "../types/HttpReponse";

function useFetch<T>(url: string, reqBody?: any) { 
    const [data, setData] = useState<HttpRespose<T>>({ data: [], success: false });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => { 
        let mounted = true;

        const fetchApi = async () => { 
            setLoading(true);
            try {
                const resp =  await CallApi.get(url, reqBody);
                const data: HttpRespose<T> = resp.data;
                if (mounted) setData(data);
            } catch (err) {
                setError(err);
                console.log('useFetch Error', url, err);
            } finally { 
                setLoading(false);
            }
        }

        fetchApi();

        return () => { 
            mounted = false;
        }
    }, [url, reqBody])

    return { data, loading, error }
}

export default useFetch;