import React from 'react';

import s from './DefaultTemplate.module.css';

type Props = {
  header: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
};

function DefaultTemplate({ header, title, content }: Props) {
  return (
    <main className={s.page}>
      {header}
      <main className={s.main}>
        <div className={s.title}>{title}</div>
        {content}
      </main>
    </main>
  );
}

export default DefaultTemplate;
