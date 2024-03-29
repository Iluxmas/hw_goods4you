import FAQ from '@organisms/FAQ/FAQ';
import Hero from '@organisms/Hero/Hero';
import Quiz from '@organisms/Quiz/Quiz';
import Team from '@organisms/Team/Team';
import About from '@organisms/About/About';
import Footer from '@organisms/Footer/Footer';
import Header from '@organisms/Header/Header';
import Catalog from '@organisms/Catalog/Catalog';
import MainTemplate from '@templates/MainTemplate/MainTemplate';

function Main() {
  return (
    <MainTemplate>
      <Header />
      <Hero />
      <Catalog />
      <About />
      <Quiz />
      <Team />
      <FAQ />
      <Footer />
    </MainTemplate>
  );
}

export default Main;
