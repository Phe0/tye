function parseDate(date) {
  date = new Date(date);
  return `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()}`;
}

function parseHour(date) {
  date = new Date(date);
  return `${date.getHours()}:${date.getMinutes()}`;
}

export { parseDate, parseHour };
