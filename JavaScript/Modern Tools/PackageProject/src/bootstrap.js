import moment from 'moment';

console.log(moment.now());

const rightNow = moment();
console.log(rightNow);

const birthday = moment('20000-05-27', 'YYYY-MM-DD');
console.log(birthday.format('dddd'));

console.log(birthday.fromNow());

const twoWeeksFromNow = moment().add(14, 'days');
//const twoWeeksFromNow = moment().add(2, 'weeks');
console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.toString());