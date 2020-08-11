import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { Popover, PopoverHeader, PopoverBody } from 'shards-react';

export default function HtmlLogo({ id }) {
  const someKey = nanoid();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
      target="_blank"
      className="icon"
      id={`html-logo-${id}`}
      key={someKey}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill="#E44D26"
          d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
        />
        <path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z" />
        <path
          fill="#EBEBEB"
          d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z"
        />
        <path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z" />
        <path
          fill="#fff"
          d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
        />
      </svg>
      <Popover placement="bottom" open={isOpen} target={`#html-logo-${id}`}>
        <PopoverHeader className="popover-header">HTML5</PopoverHeader>
        <PopoverBody className="popover-body">
          HTML5 is the latest evolution of the standard that defines HTML. The term represents two
          different concepts. It is a new version of the language HTML, with new elements,
          attributes, and behaviors, and a larger set of technologies that allows the building of
          more diverse and powerful Web sites and applications. This set is sometimes called HTML5 &
          friends and often shortened to just HTML5.
        </PopoverBody>
      </Popover>
    </a>
  );
}
