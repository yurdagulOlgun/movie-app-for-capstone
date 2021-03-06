import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import MovieDetail from './components/pages/MovieDetail'
import Login from './components/pages/Login';
import Popular from "./components/pages/Popular"
import TopRated from "./components/pages/TopRated"

const routes = [
  {title:"Home", path:"/", element:Home},
  {title:"Profile", path:"/profile", element:Profile},
  {title:"Login", path:"/login", element:Login},
  {title:"MovieDetail", path:"/:movieId", element:MovieDetail},
  {title:"Popular", path:"/popular", element: Popular},
  {title:"Top Rated", path:"/top-rated", element: TopRated}
]

export default routes;