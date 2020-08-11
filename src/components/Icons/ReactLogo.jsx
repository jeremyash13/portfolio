import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'shards-react';

export default function ReactLogo({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a
      href="https://reactjs.org/"
      target="_blank"
      className="icon"
      key={id}
      id={`react-logo-${id}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
      <Popover placement="bottom" open={isOpen} target={`#react-logo-${id}`}>
        <PopoverHeader className="popover-header">React.js</PopoverHeader>
        <PopoverBody className="popover-body">
          React makes it painless to create interactive UIs. Design simple views for each state in
          your application, and React will efficiently update and render just the right components
          when your data changes.<br/><br/> Declarative views make your code more predictable and easier to
          debug.
        </PopoverBody>
      </Popover>
    </a>
  );
}
