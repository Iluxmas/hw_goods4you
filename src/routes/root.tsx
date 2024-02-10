import Hero from '@/components/organisms/Hero/Hero';
import './App.css';
import Button from '@atoms/Button/Button';

function Root() {
  return (
    <>
      <Hero />
      <div className="App">
        <Button text="Go to shopping" />
        <Button text="Go to shopping" intent="outline" />
        <Button text="Go to shopping" intent="secondary" />
        <Button text="Go to shopping" intent="link" />
      </div>
    </>
  );
}

export default Root;
