import Image from '@atoms/Image/Image';
import { TTeamMember } from '@/types/team';

import s from './GalleryItem.module.css';

type Props = {
  data: TTeamMember;
};

function GalleryItem({ data }: Props) {
  return (
    <div className={s.root}>
      <Image src={data.photo} className={s.image} />
      <div className={s.overlay}>
        <p className={s.name}>{data.name}</p>
        <p className={s.role}>{data.role}</p>
      </div>
    </div>
  );
}

export default GalleryItem;
