import React from "react";
import { Table } from "react-bootstrap";

export const ExchangeRateToBlock = ({ rate }) => {
  let res = rate.map((item) => {
    return (
      <tr key={item.currency}>
        <td>{item.currency}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </Table>
    </>
  );
};
