import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";
import { savePaymentMethod } from "../Actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <section>
      <FormContainer>
        <h1 className="heading__main heading">
          <span>Payment Methods</span>
        </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="form__control">
            <Form.Label
              as="legend"
              style={{ color: "white", fontSize: "16px" }}
            >
              Select Method
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{ margin: "10px", color: "white", fontSize: "16px" }}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </section>
  );
};

export default PaymentScreen;
