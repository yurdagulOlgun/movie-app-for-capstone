import { useQuery } from "react-query";
import { fetchRecommendations } from "../data";
import { Card, Col} from "react-bootstrap";


export default function Recommendations({ movieId }) {

  const { data } = useQuery(
    ["movies recommendations ", movieId],
    () => fetchRecommendations(movieId),
    {
      retry: false,
      select: (data) => data.data.results,
    }
  );
console.log(data);
  return (
    <>
    
      {data?.map((item, index) => (
        <Col key={index} xs={12} md={3} lg={2}>
             <Card className="m-2" >
             <Card.Img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            className="w-100 "
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </Card>
        </Col>
       
      )).slice(0,3)
      }
    </>
  );
}
