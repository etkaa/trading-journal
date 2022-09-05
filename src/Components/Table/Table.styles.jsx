import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  margin: auto;
  background-color: #100720;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  color: white;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 0.3);
`;

export const StyledTable = styled.table`
  width: 100%;
  margin: 5px 5px;
  font-size: 20px;
  font-weight: 300;
  display: inline-table;

  tr:nth-child(even) {
    background-color: #2c3333;
  }

  th,
  td {
    border: 1px solid #3d3c42;
  }
`;

export const TableCell = styled.td`
  padding: 10px 5px;
`;
