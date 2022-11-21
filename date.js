import dayjs from "dayjs";
const c = dayjs()
//console.log(c.format('DD.MM.YYYY hh:mm'));
const currentDate = c.format('DD.MM.YYYY hh:mm');
const startDate = c.startOf('date').format('DD.MM.YYYY hh:mm');
const endDate = c.endOf('date').format('DD.MM.YYYY hh:mm');

const inputtDate = '18.11.2022 16:00'
