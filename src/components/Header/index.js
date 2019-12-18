import React from 'react';
import { Container } from './styles';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';

export default function Header() {
  return (
    <Container>
      <div>
        <h1>My Social Networks</h1>
      </div>
      <div className="actions">
        <a href="https://github.com/manogel" target="_blank">
          <img src={github} alt="GitHub" />
        </a>
        <a
          className="last"
          href="https://linkedin.com/in/manogel"
          target="_blank"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </Container>
  );
}
