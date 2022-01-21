import { useQuery } from "react-query";
import { fetchMovies } from "../../data";
import Navbar from "../base/Navbar";
import { useState } from "react";
import Search from "../Search";


export default function Home () {
    const { isLoading, isError, isFetching, isFetched, error, data, ...query } = 
    useQuery('movies', fetchMovies, 
    { 
        retry: false, 
        select: (data) => data.data.results 
    })

    const [q, setQ] = useState([]);

    return (
        <>
            <Navbar/> <br/><br/><br/>
            <Search q={q} setQ={setQ} />

            {data?.filter((data) => data.title.toLowerCase().startsWith(q))
            .map((item) => <h1 key={item.id}>{item.title}</h1> ) }
        </>
    )
}