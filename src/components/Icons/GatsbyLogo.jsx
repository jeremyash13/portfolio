import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Popover, PopoverHeader, PopoverBody } from 'shards-react';

export default function GatsbyLogo({id}) {
  const someKey = nanoid();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <a href="https://www.gatsbyjs.org/" className="icon" id={`gatsby-logo-${id}`} key={someKey} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false">
        <path
          d="M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z"
          fill="#fff"
        />
        <path
          d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
          fill="#639"
        />
      </svg>
      <Popover placement="bottom" open={isOpen} target={`#gatsby-logo-${id}`}>
        <PopoverHeader className="popover-header">Gatsby.js</PopoverHeader>
        <PopoverBody className="popover-body">Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</PopoverBody>
      </Popover>
    </a>
  );
}
