import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      inline="true"
      style={{ display: "flex", justifyContent: "space-evenly", flex: 1 }}
    >
      <InputGroup>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products...."
          className="mr-sm-2 ml-sm-5 search"
        ></Form.Control>

        <InputGroup.Text className="search-icon" onClick={submitHandler}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
