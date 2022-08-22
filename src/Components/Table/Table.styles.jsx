import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 50px;
  background-color: #100720;
  align-items: center;
  width: 70%;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin: 5px 5px;
  font-size: 20px;
  font-weight: 300;

  tr:nth-child(even) {
    background-color: #2c3333;
  }

  th,
  td {
    border: 1px solid #3d3c42;
  }
`;

export const TableHead = styled.th`
  padding: 15px 10px;
  font-weight: 500;
`;

export const TableCell = styled.td`
  padding: 10px 5px;
`;
