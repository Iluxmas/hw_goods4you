import s from './MainTemplate.module.css';

function MainTemplate({ children }: { children: React.ReactNode }) {
  return <div className={s.root}>{children}</div>;
}

export default MainTemplate;
