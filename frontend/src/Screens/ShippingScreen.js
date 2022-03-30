import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";
import { saveShippingAddress } from "../Actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <section>
      <FormContainer>
        <h1 className="heading__main heading">
          <span>Shipping</span>
        </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address" className="form__control">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city" className="form__control">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="city"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode" className="form__control">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="postalCode"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country" className="form__control">
            <Form.Label>ZCountry</Form.Label>
            <Form.Control
              type="country"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </section>
  );
};

export default ShippingScreen;
