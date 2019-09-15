import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  list-style: none;

  li {
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    strong {
      font-size: 16px;
      line-height: 20px;
      color: red;
      margin-top: 5px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;

      background: #7159c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      margin-top: auto; /* alinha os botoes com quebra de linha */
      overflow: hidden;
      transition: all 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
        transform: translateY(-2px);
      }

      div {
        display: flex;
        align-items: center;

        background: rgba(0, 0, 0, 0.1);
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;

        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
`;
