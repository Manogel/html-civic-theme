import React from 'react';
import { Container, Content } from './styles';

export default function Profile() {
  return (
    <Container>
      <Content>
        <h1>Manoel Gomes</h1>
        <p>
          I'm a mobile and server side developer, passionate about software
          development!
        </p>

        <strong>General Info</strong>
        <ul>
          <li>
            <span>Email</span>
            manoelgomes53@gmail.com
          </li>
          <li>
            <span>Location</span>
            Macapá, Amapá, Brazil
          </li>
          <li>
            <span>University</span>
            Univesidade Federal do Amapá - UNIFAP
          </li>
        </ul>
      </Content>
      <img
        src="https://avatars1.githubusercontent.com/u/38564520?v=4"
        alt="Profile"
      />
    </Container>
  );
}
