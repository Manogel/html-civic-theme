import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 40px;

  img {
    margin-left: 5px;
    border-radius: 4px;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 500px;

  h1 {
    font-size: 70px;
    color: #40424a;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 33px;
    line-height: 1.3;
    color: #808181;
    font-weight: bold;
    margin-bottom: 30px;
  }

  strong {
    font-size: 40px;
    color: #40424a;
    margin-bottom: 20px;
    font-weight: 600;
  }

  ul {
    margin-top: 20px;
    list-style: none;
    li {
      font-size: 20px;
      color: #808181;
      margin: 15px 0;

      span {
        display: inline-block;
        color: #40424a;
        min-width: 120px;
      }
    }
  }
`;
