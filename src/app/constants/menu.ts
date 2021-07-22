import { environment } from 'src/environments/environment';

export interface IMenuItem {
  icon?: string;
  iconEmpty?: string;
  label: string;
  to: string;
}

const data: IMenuItem[] = [
  {
    icon: '../../assets/icons/icon-dashboard.svg',
    iconEmpty: '../../assets/icons/icon-dashboard-empty.svg',
    label: 'Dashboard',
    to: `/dashboard`,
  },
  {
    icon: '../../assets/icons/farmer.svg',
    iconEmpty: '../../assets/icons/farmer-empty.svg',
    label: 'Farmers',
    to: `/farmers`,
  },
  {
    icon: '../../assets/icons/organization.svg',
    iconEmpty: '../../assets/icons/organization.svg',
    label: 'Organization',
    to: `/organization`,
  },
  {
    icon: '../../assets/icons/settings.svg',
    iconEmpty: '../../assets/icons/settings.svg',
    label: 'Settings',
    to: `/settings`,
  },
];
export default data;
