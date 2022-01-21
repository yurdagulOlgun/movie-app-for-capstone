import { useQuery } from "react-query";
import { fetchMovies } from "../data";

export default function Home () {
    const { isLoading, isError, isFetching, isFetched, error, data, ...query } = 
    useQuery('movies', fetchMovies, 
    { 
        retry: false, 
        select: (data) => data.data.results 
    })

    return (
        <>
            {data?.map((item) => <h1 key={item.id}>{item.title}</h1> ) }
        </>
    )
}