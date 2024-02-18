import clsx from 'clsx';

import s from './NavItem.module.css';

type Props = {
  href: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
};

function NavItem({ text, className, href, children }: Props) {
  function scrollTo(element: HTMLElement, to: number, duration: number) {
    if (duration <= 0) return;
    const difference = to - element.scrollTop;
    const perTick = (difference / duration) * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }

  return (
    <a
      href={href}
      className={clsx(s.root, className)}
      aria-label={`navigate to ${text}`}
      onClick={(e) => {
        e.preventDefault();
        const elem = document.querySelector(href) as HTMLElement;
        if (elem) {
          scrollTo(
            document.getElementsByTagName('html')[0],
            elem.offsetTop,
            500
          );
        }
      }}>
      <p className={s.text}>{text}</p>
      {!!children && children}
    </a>
  );
}

export default NavItem;
