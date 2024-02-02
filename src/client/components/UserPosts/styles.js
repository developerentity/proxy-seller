import styled from "styled-components";

export const PostItem = styled.article`
  margin-bottom: 20px;
  padding: 15px;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 5px;

  h2 {
    margin-top: 0;
  }

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;
