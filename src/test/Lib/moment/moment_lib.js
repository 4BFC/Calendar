function generateDates() {
  const year = 2024;
  const month = 6; // 7월, moment.js에서는 월이 0부터 시작

  const firstDay = moment({ year, month, day: 1 }); //시작 일 부터
  const lastDay = moment({ year, month: month + 1, day: 0 }); // 끝나는 일 까지

  const allDates = []; //빈 객체로 문자열
  let currentDay = firstDay;

  while (currentDay.isSameOrBefore(lastDay)) {//isSameOrBefore? => lastDay까지
    //isSameOrBefore는 moment.js에서 두 날짜를 비교하여 첫 번째 날짜가 두 번째 날짜와 같거나 이전인지 확인하는 메서드입니다. 
    console.log(currentDay.isSameOrBefore(lastDay))
    allDates.push(currentDay.format('YYYY-MM-DD')); //해당 일 push
    currentDay.add(1, 'day'); //add? => 무슨 뜻?
    //add(1, 'day')는 moment.js에서 현재 날짜에 일(day)을 추가하는 메서드입니다. 현재 날짜를 1일씩 더해가면서 반복문을 통해 모든 날짜를 생성하는 데 사용됩니다. => moment에 직접적으로 접근이 안되서 하지만 포멧팅으로 접근이 가능 할수도 있지 않을까?
  }

  return allDates;
}

// 결과 확인
const output = document.getElementById('output');
const dates = generateDates(); //generateDates?
//generateDates는 날짜를 생성하는 함수로, 현재 날짜를 기준으로 주어진 연도(year)와 월(month)에 해당하는 모든 날짜를 배열로 반환합니다. 이 함수는 moment.js 라이브러리를 사용하여 날짜를 다루고 있습니다.
dates.forEach((date) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = date;
  output.appendChild(paragraph);
});