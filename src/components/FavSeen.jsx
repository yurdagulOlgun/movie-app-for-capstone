import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { IoVideocam, IoVideocamOutline } from "react-icons/io5";
import { addFavorite, removeFavorite } from "../reduxStore/favorite";
import { addSeenList, removeSeenList } from "../reduxStore/seenList";

export default function FavSeen ({item}) {
    const dispatch = useDispatch();
    const { favorites, seenList} = useSelector((state) => state);

    const isFav = favorites?.films?.some((fav) => (fav.id === item.id));
    const isWatch = seenList?.seenFilms?.some((watch) => watch.id === item.id) 

    return (
        <>
            {isFav ? (
          <AiFillStar onClick={() => dispatch(removeFavorite(item.id))} />
        ) : (
          <AiOutlineStar
            onClick={() =>
              dispatch(
                addFavorite(
                  item.id,
                  item.title,
                  item.poster_path,
                  item.release_date,
                  item.genre_ids
                )
              )
            }
          />

        )}
         {
          isWatch ? ( <IoVideocam onClick={() => dispatch(removeSeenList(item.id))} /> ) :
          ( <IoVideocamOutline  onClick={() =>
            dispatch(
              addSeenList(
                item.id,
                item.title,
                item.poster_path,
                item.release_date,
                item.genre_ids
              )
            )
          }/> )
        }
        </>
    )
}