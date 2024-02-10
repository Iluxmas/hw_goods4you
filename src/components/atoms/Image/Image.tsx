import clsx from 'clsx';

import s from './Image.module.css';

type Props = {
  src: string;
  className?: string;
};

function Image({ src, className }: Props) {
  return (
    <img
      src={src}
      draggable={false}
      alt="product photo"
      className={clsx(s.image, className)}
    />
  );
}

export default Image;
