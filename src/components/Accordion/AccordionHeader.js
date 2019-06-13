import React, { useEffect, useState } from 'react';
import { tsPropertySignature } from '@babel/types';
import Styles from './Accordion.module.css';

const AccordionHeader = props => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  useEffect(() => setAccordionIsOpen(props.accordionIsOpen));

  const onClickHandler = e => {
    e.preventDefault();
    props.onClickHandler();
  };
  return (
    <div
      className="card-header rgba-stylish-strong z-depth-1 mb-1"
      role="tab"
      id="heading1"
    >
      <button
        data-toggle="collapse"
        data-parent="#accordionEx7"
        data-target="#collapse1"
        aria-expanded={accordionIsOpen}
        aria-controls="collapse1"
        className={accordionIsOpen ? Styles.collapsed : ''}
        onClick={onClickHandler}
      >
        <h5 className="mb-0 white-text text-uppercase font-thin">
          Filter Speciality <i className="fas fa-angle-down rotate-icon" />
        </h5>
      </button>
    </div>
  );
};

export default AccordionHeader;
