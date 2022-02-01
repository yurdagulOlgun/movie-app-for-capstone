import { useSelector } from "react-redux";
import { Col, Container, Row, Table } from "react-bootstrap";
import UserInfo from "../UserInfo";
import FavSeen from "../FavSeen"

export default function Profile() {
  const { favorites, seenList } = useSelector((state) => state);
  

  const movies = favorites?.films.concat(seenList?.seenFilms);
//   let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

  const unique = movies?.filter((item,index,ar) => ar?.map((data) => data.id).indexOf(item.id) === index);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9} lg={6} className="mt-5">
            <UserInfo />
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Movie Title</th>
              <th>Movie Genre</th>
              <th>Icons</th>
            </tr>
          </thead>
          <tbody>
            {unique?.map((item, i) => (
              <tr key={i}>
                <td >{item.id}</td>

                <td>{item.title}</td>

                <td>Genre </td>
                <td><FavSeen item={item}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
