import { useSelector } from "react-redux"
import MovieCard from "../MovieCard"

export default function Profile (props) {
    const user = useSelector((state) => state)
    console.log(user);
    return (
        <><br />
            {
                user?.user?.map((item,index) => <MovieCard key={index} item={item}/>)
            }
        </>
    )
}