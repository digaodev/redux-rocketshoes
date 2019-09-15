import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px;

    button {
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      letter-spacing: 0.5px;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: all 0.2s;

      :hover {
        background: ${darken(0.03, '#7159c1')};
        transform: translateY(-2px);
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
    text-align: left;
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding: 12px;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;

    /* color: #666; */
  }

  span {
    display: block;

    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
