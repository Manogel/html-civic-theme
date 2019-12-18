import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-self: center;
  margin-top: 40px;
  flex-direction: column;

  .section-title {
    h2 {
      display: inline-block;
      position: relative;
      margin-bottom: 100px;
      padding-bottom: 2px;
      line-height: normal;
      font-size: 40px;
      color: #40424a;
    }

    h2::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      left: 0;
      bottom: 0;
      background: #40424a;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 110px;
  margin-bottom: 40px;
  margin-left: 60px;
  border-left: 2px solid #40424a;

  li {
    margin-bottom: 50px;
    position: relative;

    h2 {
      font-size: 30px;
      margin-bottom: 10px;
      color: #40424a;
    }

    h3 {
      font-size: 16px;
      color: #40424a;
    }

    h4 {
      font-size: 12px;
      text-transform: uppercase;
      color: #808181;
      margin-top: 10px;
      margin-bottom: 40px;
    }
  }

  li::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border: 2px solid #40424a;
    border-radius: 50px;
    background: #cacaca;
    top: 30px;
    left: -120px;
  }
`;
