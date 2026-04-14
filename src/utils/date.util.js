import moment from 'moment';

export const convertUtcToLocalDate = (date) => {
  return moment.utc(date).local().format('LLL');
};
