import React, { useState, useEffect } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

const Accordion = () => {
  const onClickHandler = () => {
    setAccordionIsOpen(!accordionIsOpen);
    console.log('cool');
  };

  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  return (
    <div class="card">
      <AccordionHeader
        onClickHandler={onClickHandler}
        accordionIsOpen={accordionIsOpen}
      />
      <AccordionBody accordionIsOpen={accordionIsOpen} />
    </div>
  );
};

export default Accordion;
