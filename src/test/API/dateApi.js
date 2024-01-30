export default function DateApp() {
  const DATE = new Date();
  //요일
  const get_day = DATE.getDay();
  //년월일
  const get_year = DATE.setFullYear(2023, 10, 29);
  const get_month = DATE.getMonth();
  const get_date = DATE.getDate();

  const ConSole = () => {
    console.log("Day " + get_day);
    console.log("Year " + DATE.setFullYear(2023, 10, 29));
    console.log("Month " + get_month);
    console.log("Date " + get_date);
  }

  return (
    <>
      {ConSole()}
    </>
  )
}