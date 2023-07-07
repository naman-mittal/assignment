import moment from 'moment';
import {User} from '../constants/interfaces';

export const generateFileName = (user: User) => {
  return `${user.id}_${moment().format('DDMMYY_HHmmSSS')}_viewShot`;
};
