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

export const SearchInput = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SortButton = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NoUsersFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 2rem;
  color: #8c979a;
`;
