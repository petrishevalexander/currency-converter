import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

export const ExchangeRateFromBlock = ({
  currencyNames,
  amount,
  currency,
  onChangeAmount,
  onChangeCurrancy,
}) => {
  return (
    <>
      <Container className="d-flex justify-content-center mt-2">
        <Row>
          <Col sm={8}>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Text input with dropdown button"
                type="number"
                value={amount}
                onChange={(event) => onChangeAmount(event.target.value)}
              />
            </InputGroup>
          </Col>
          <Col sm={4}>
            <Form.Select
              aria-label="Default select example"
              value={currency}
              onChange={(event) => onChangeCurrancy(event.target.value)}
            >
              {currencyNames.map((currencyName) => {
                return (
                  <option value={currencyName} key={currencyName}>
                    {currencyName}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};
