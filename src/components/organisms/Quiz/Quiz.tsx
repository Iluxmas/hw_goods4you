import React, { useState } from 'react';
import Button from '@atoms/Button/Button';
import Heading from '@atoms/Heading/Heading';
import Subtitle from '@atoms/Subtitle/Subtitle';
import Container from '@atoms/Container/Container';
import BlockHeading from '@atoms/BlockHeading/BlockHeading';
import OptionsList from '@organisms/OptionsList/OptionsList';
import { options } from '@/constants/quizOptions';

import s from './Quiz.module.css';

function Quiz() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleToggleCheckbox = (value: boolean, id: number) => {
    if (!value) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems(selectedItems.concat(id));
    }
  };

  return (
    <section className={s.root}>
      <Container className={s.wrapper}>
        <div className={s.header}>
          <Heading>We will select the perfect product for you</Heading>
          <Subtitle className={s.subtitle}>
            Answer three questions and we will send you a catalog with the most
            suitable products for you.
          </Subtitle>
        </div>
        <div className={s.content}>
          <BlockHeading>What type of product are you considering?</BlockHeading>
          <OptionsList
            list={options}
            selected={selectedItems}
            onToggle={handleToggleCheckbox}
          />
        </div>
        <div className={s.footer}>
          <div>1 of 3</div>
          <Button text="Next step" intent="outline" className={s.button} />
        </div>
      </Container>
    </section>
  );
}

export default Quiz;
