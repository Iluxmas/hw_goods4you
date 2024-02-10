import { TTeamMember } from '@/types/team';
import Team1 from '@/images/team_01.jpg';
import Team2 from '@/images/team_02.jpg';
import Team3 from '@/images/team_03.jpg';
import Team4 from '@/images/team_04.jpg';
import Team5 from '@/images/team_05.jpg';
import Team6 from '@/images/team_06.jpg';

export const teamData: TTeamMember[] = [
  { name: 'Maxim', role: 'Administrator', photo: Team1, id: 101 },
  { name: 'Bianca', role: 'Head of Sales', photo: Team3, id: 102 },
  { name: 'Daria', role: 'PR Manager', photo: Team5, id: 103 },
  { name: 'Fabrice', role: 'Art Director', photo: Team2, id: 104 },
  { name: 'Gustav', role: 'Supplier', photo: Team4, id: 105 },
  { name: 'Julia', role: 'Photographer', photo: Team6, id: 106 },
];
