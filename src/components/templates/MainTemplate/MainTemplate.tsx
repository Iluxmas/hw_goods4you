import s from './MainTemplate.module.css';

function MainTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.root} id="main">
      {children}
    </div>
  );
}

export default MainTemplate;
