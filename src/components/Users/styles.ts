import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 3px;

  &:hover {
    background: #0056b3;
  }
`;
