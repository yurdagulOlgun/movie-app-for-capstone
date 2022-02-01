import { useSelector } from "react-redux";
import { Col, Container, Row, Table } from "react-bootstrap";
import UserInfo from "../UserInfo";
import FavSeen from "../FavSeen";
import { useQuery } from "react-query";
import { fetchGenres } from "../../data";
import { useState } from "react";

export default function Profile() {
  const { favorites, seenList } = useSelector((state) => state);
  const [sort, setSort] = useState();
  const movies = favorites?.films.concat(seenList?.seenFilms);
  const unique = movies?.filter(
    (item, index, ar) => ar?.map((data) => data.id).indexOf(item.id) === index
  );

  const { data } = useQuery("movies genre", fetchGenres, {
    retry: false,
    select: (data) => data.data.genres,
  });

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9} lg={6} className="mt-5">
            <UserInfo />
          </Col>
        </Row>
        <Row>
          <Col className="mt-3" md={{span: 3,offset:9}}>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) =>
                setSort(e.target.options[e.target.selectedIndex].value)
              }
            >
              <option value="all">all</option>
              <option value="date">closest release date</option>
              <option value="fav">favorites</option>
              <option value="seen">seen</option>
            </select>
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Movie Title</th>
              <th>Movie Genre</th>
              <th>Fav-Seen</th>
            </tr>
          </thead>
          <tbody>
            {sort === "fav"
              ? favorites?.films?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {item?.genre_ids
                      ?.map((result, i) =>
                        data
                          ?.filter((genre) => genre.id === result)
                          .map((finalData, index) => (
                            <td key={i}>{finalData.name}</td>
                          ))
                      )
                      .slice(0, 1)}
                    <td>
                      <FavSeen item={item} />
                    </td>
                  </tr>
                ))
              : sort === "seen"
              ? seenList?.seenFilms?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {item?.genre_ids
                      ?.map((result, i) =>
                        data
                          ?.filter((genre) => genre.id === result)
                          .map((finalData, index) => (
                            <td key={i}>{finalData.name}</td>
                          ))
                      )
                      .slice(0, 1)}
                    <td>
                      <FavSeen item={item} />
                    </td>
                  </tr>
                ))
              : unique?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {item?.genre_ids
                      ?.map((result, i) =>
                        data
                          ?.filter((genre) => genre.id === result)
                          .map((finalData, index) => (
                            <td key={i}>{finalData.name}</td>
                          ))
                      )
                      .slice(0, 1)}
                    <td>
                      <FavSeen item={item} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
