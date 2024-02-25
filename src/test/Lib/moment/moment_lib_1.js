// import moment from "moment";

// import { months } from "moment";

//오늘 요일 보이기
console.log(`today is ${moment().format('dddd')}`);

//for문으로 모든 요일 보이기
function weekDays() {
  const allDay = moment.weekdays();
  for (let i = 0; i < allDay.length; i++) {
    console.log(allDay[i]);
  }
}
weekDays();

//map함수로 모든 요일 보이기
const allDays = moment.weekdays();
allDays.map((day) => {
  console.log(day)
})

//월 보여주기
const allMonth = moment.months();
console.log("current" + allMonth);
//map 함수로 월 보여주기
allMonth.map((month) => {
  console.log(month)
})
//숫자로 보여주기
console.log("=> Month")
const allMonthNum = moment().month() + 1;
console.log(allMonthNum)
// allMonthNum.map((month) => {
//   console.log(month)
// })

//주마다 보여주기
const today = moment();
const firstWeekStartDate = today.clone().startOf('month').startOf('week');
const firstWeekEndDate = today.clone().startOf('month').endOf('week');
console.log(firstWeekStartDate, firstWeekEndDate)
// 반복문을 사용하여 한 주의 날짜를 출력
for (let day = firstWeekStartDate.clone(); day.isSameOrBefore(firstWeekEndDate); day.add(1, 'day')) {
  console.log(day.format('YYYY-MM-DD'));
}

//특정 날짜를 지정하기
// 특정 날짜(24년 8월)를 설정
const Year = 24;
const Month = 8;
const specificDate = moment(`${24}-${Month}-01`, 'YY-MM-DD');

// 특정 날짜의 첫 주의 시작일과 마지막 날을 계산
const first_WeekStartDate = specificDate.clone().startOf('month').startOf('week');
const first_WeekEndDate = specificDate.clone().startOf('month').endOf('week');

// 첫 주의 시작일과 마지막 날을 출력
console.log(`First week of August 24: ${first_WeekStartDate.format('YYYY-MM-DD')} to ${first_WeekEndDate.format('YYYY-MM-DD')}`);

// 반복문을 사용하여 첫 주의 날짜 출력
const dates = [];
//isSameOrBefore
for (let day = first_WeekStartDate.clone(); day.isSameOrBefore(first_WeekEndDate); day.add(1, 'day')) {
  console.log(day.format('YYYY-MM-DD'));
  dates.push(day.format('DD'));
} console.log(dates);

dates.map((date) => {
  console.log(date);
})

//모든 주마다 달 출력
const last_WeekEndDate = specificDate.clone().endOf('month').endOf('week');

for (let weekStart = first_WeekStartDate.clone(); weekStart.isBefore(last_WeekEndDate); weekStart.add(1, 'week')) {
  const weekEnd = weekStart.clone().endOf('week');
  console.log(`Week: ${weekStart.format('YYYY-MM-DD')} to ${weekEnd.format('YYYY-MM-DD')}`);
  console.log(weekStart.isBefore(last_WeekEndDate))

  // 주에 해당하는 날짜 출력
  for (let day = weekStart.clone(); day.isSameOrBefore(weekEnd); day.add(1, 'day')) {
    console.log(day.format('YYYY-MM-DD'));
  }
}

console.log(moment().month() + 1)