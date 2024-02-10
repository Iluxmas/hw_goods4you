import Heading from '@atoms/Heading/Heading';
import Gallery from '@molecules/Gallery/Gallery';
import Container from '@atoms/Container/Container';
import { ReactComponent as Decor } from '@/icons/decor_team.svg';
import { teamData } from '@/constants/teamData';

import s from './Team.module.css';

function Team() {
  return (
    <section className={s.root}>
      <Container className={s.wrapper}>
        <Heading white className={s.heading}>
          Our team
        </Heading>
        <Gallery teamList={teamData} />
      </Container>
      <Decor className={s.decor} />
    </section>
  );
}

export default Team;
