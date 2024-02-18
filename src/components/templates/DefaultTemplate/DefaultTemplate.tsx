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
      <div className={s.title}>{title}</div>
      {content}
    </main>
  );
}

export default DefaultTemplate;
