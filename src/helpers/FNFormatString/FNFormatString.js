export const formatDate = (date) => {
  console.log('data', date);
  if (date) {
    const newDate = new Date(date),
    day = ("0" + newDate.getDate()).slice(-2),
    month = ("0" + (newDate.getMonth() + 1)).slice(-2),
    year = newDate.getFullYear(),
    hour = ("0" + newDate.getHours()).slice(-2),
    min = ("0" + newDate.getMinutes()).slice(-2);    
    return `${day}/${month}/${year} ${hour}:${min}`;
  }
  return ('-');
}