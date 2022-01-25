import { useQuery } from "react-query";
import { fetchReviews } from "../data";
import { Card, Col} from "react-bootstrap";


export default function Reviews({ movieId }) {

  const { data } = useQuery(
    ["movies review ", movieId],
    () => fetchReviews(movieId),
    {
      retry: false,
      select: (data) => data.data.results,
    }
  );
console.log(data);
  return (
    <>
    
      {data?.map((item, index) => (
        <Col key={index} xs={12} md={9} lg={6}>
             <Card className="m-2" >
          <Card.Body>
            <Card.Title>{item.author}</Card.Title>
            <Card.Text>{item.content.substring(0,600)}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
       
      )).slice(0,1)
      }
    </>
  );
}
