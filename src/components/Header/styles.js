import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 10px;
  width: 100%;
  height: 100px;
  max-width: 1000px;

  div h1 {
    color: #3b3d41;
    font-size: 28px;
    font-weight: bold;
  }

  div.actions a {
    margin: 0 15px;
    img {
      width: 50px;
      height: 50px;
    }
  }

  div.actions a.last {
    margin-right: 0;
  }
`;

export const Content = styled.div``;
