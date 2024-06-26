import { useEffect, useState } from "react";

export default function LoadmoreData({ api, limit = 5 }) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errMsg, setErrMsg] = useState(null);

    const apiUrl = `${api}${count === 0 ? 0 : count * 20}`;

    async function fetchProducts(api) {
        try {
            setLoading(true);
            const res = await fetch(api);
            const data = await res.json();
            console.log(data);
            if (data && data.products && data.products.length) {
                setProducts(data);
            }
        } catch (err) {
            setErrMsg(err.message);
            console.error(errMsg);
        } finally {
            setLoading(false);
            console.log('done fetching...');
        }
    }

    useEffect((apiUrl) => {
        if (apiUrl != '')
            fetchProducts(apiUrl)
    }, [])

    if (loading) return (<h3>Loading Please Wait!!</h3>)

    if (errMsg) return (<h3>Error Occured &quot;{errMsg}&quot;</h3>)


    console.log(apiUrl, products);

    return (
        <>
            <h1>Hello</h1>
        </>
    )

}