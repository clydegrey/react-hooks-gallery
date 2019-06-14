import React, { useState, useEffect } from 'react';
import Styles from './Accordion.module.css';

const AccordionBody = props => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  useEffect(() => setAccordionIsOpen(props.accordionIsOpen));
  return (
    <div
      id="collapse1"
      className={[
        Styles.cool,
        accordionIsOpen ? Styles.show : Styles.hide
      ].join(' ')}
      role="tabpanel"
      aria-labelledby="heading1"
      data-parent="#accordionEx7"
    >
      <div className={Styles.card_body}>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable.
        </p>
      </div>
    </div>
  );
};

export default AccordionBody;
