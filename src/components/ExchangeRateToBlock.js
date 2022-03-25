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
    <div>
      <Table striped bordered hover className="mr-2">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </Table>
    </div>
  );
};
