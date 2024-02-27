import { useState } from 'react';
import clsx from 'clsx';
import Image from '@atoms/Image/Image';

import s from './Carousel.module.css';

type Props = {
  images: string[];
};

function Carousel({ images }: Props) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={s.root}>
      <div className={s.image}>
        <div className={s.wrapper}>
          <div
            className={clsx(s.pagination, s.prev)}
            onClick={() =>
              setSelected(selected === 0 ? images.length - 1 : selected - 1)
            }></div>
          <Image src={images[selected]} />
          <div
            className={clsx(s.pagination, s.next)}
            onClick={() => setSelected((selected + 1) % images.length)}></div>
        </div>
      </div>
      <div className={s.previews}>
        {images.map((el, idx) => (
          <div
            key={idx}
            className={clsx(s.previewItem, selected === idx && s.selected)}
            onClick={() => setSelected(idx)}>
            <Image src={el} className={s.previewImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
