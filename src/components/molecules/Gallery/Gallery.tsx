import GalleryItem from '@atoms/GalleryItem/GalleryItem';
import { TTeamMember } from '@/types/team';

import s from './Gallery.module.css';

type Props = {
  teamList: TTeamMember[];
};

function Gallery({ teamList }: Props) {
  return (
    <div className={s.root}>
      {teamList.map((el) => (
        <GalleryItem key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Gallery;
