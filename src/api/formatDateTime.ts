const dates = {
  months: {
    full: [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь"
    ],
    short: [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек"
    ]
  },
  days: [
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс"
  ]
}
export const getFormatDate = (date: string) => {
  let dateArray = date.split('.').map(el => Number(el));
  const day = dateArray[0];
  const month = dates.months.short[Number(dateArray[1]) - 1];
  const year = `20${dateArray[2]}`;
  const dayOfWeek = dates.days[new Date(Number(year), dateArray[1] - 1, day).getDay() - 1];
  let formatDate = `${day} ${month} ${year}, ${dayOfWeek}`;
  return formatDate;
};

export const getFormatTime = (time: string) => {
  return time.split(':').map(el => el.padStart(2, '0')).join(':');
}