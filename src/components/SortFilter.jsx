import {
    Dropdown,
    DropdownButton,
    Button,
    ButtonGroup,
  } from "react-bootstrap";
  import { useState } from "react";

  export default function SortFilter(){
    const [value, setValue] = useState("");
    const handleSelect = (e) => {
      console.log(e);
      setValue(e);
    };
      return (
          <>
            <DropdownButton
              variant="warning"
              alignRight
              title={`${value}` ? `${value}` : `sort by`}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              className="mt-4"
            >
              <Dropdown.Item eventKey="A to Z by The Title ">
                A to Z by The Title
              </Dropdown.Item>
              <Dropdown.Item eventKey="Z to A by The Title ">
                Z to A by The Title
              </Dropdown.Item>
              <Dropdown.Item eventKey="Increasing by Popularity">
                Increasing by Popularity
              </Dropdown.Item>
              <Dropdown.Item eventKey="Decreasing by Popularity">
                Decreasing by Popularity
              </Dropdown.Item>
              <Dropdown.Item eventKey="Increasing by Release Date">
                Increasing by Release Date
              </Dropdown.Item>
              <Dropdown.Item eventKey="Decreasing by Release Date">
                Decreasing by Release Date
              </Dropdown.Item>
            </DropdownButton>

            <div className=" d-flex flex-column">
              <h3 className="mt-3">Filter By</h3>
              <label htmlFor="text" className="mt-3">
                From:
              </label>
              <label htmlFor="text" className="mt-3">
                To:
              </label>
            </div>

            <ButtonGroup size="sm" className="mt-2">
              <Button className="m-2" variant="warning">
                Action
              </Button>
              <Button className="m-2" variant="warning">
                Adventure
              </Button>
              <Button className="m-2" variant="warning">
                Comedy
              </Button>
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Button className="m-2" variant="warning">
                Romance
              </Button>
              <Button className="m-2" variant="warning">
                Drama
              </Button>
              <Button className="m-2" variant="warning">
                Comedy
              </Button>
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Button className="m-2" variant="warning">
                Horror
              </Button>
              <Button className="m-2" variant="warning">
                Science Fiction
              </Button>
              <Button className="m-2" variant="warning">
                War
              </Button>
            </ButtonGroup>

            <Button className="m-2" variant="secondary" size="sm">
              Search
            </Button>
          </>
      )
  }