import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './styled.css';

//api생성하고 컴포넌트 나누기
function App() {

  const [month, setMonth] = useState(moment().month() + 1);
  const [nameMonth, setNameMonth] = useState(`(${moment().format('MMMM')})`);

  // '+' 버튼이 보여질지 여부를 결정하는 state
  const [buttonVisible, setButtonVisible] = useState({});
  // input 박스 생성을 위한 state
  const [inputBoxes, setInputBoxes] = useState({});
  // input 안에 텍스트를 위한 state
  const [inputTexts, setInputTexts] = useState({});



  const allDays = moment.weekdays();
  const allMonth = moment.months();
  const spDate = moment(`24-${month}-01`, 'YY-MM-DD');

  const first_WeekStartDate = spDate.clone().startOf('month').startOf('week');
  const last_WeekEndDate = spDate.clone().endOf('month').endOf('week');

  const weekDatesRow = [];

  const location = 'Seoul';
  // 날씨 API 열결
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc4e65baf81a66e7314e7db6dc80a301`);
        const data = await res.json();
        console.log(data.name);
        console.log(data.weather[0].main);
        console.log(data.main.temp_max - 273.15);
        console.log(data.main.temp_min - 273.15);
        console.log(data.weather[0].icon);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  // 주 단위 두 번째 for문
  for (let weekStart = first_WeekStartDate.clone(); weekStart.isBefore(last_WeekEndDate); weekStart.add(1, 'week')) {
    const weekEnd = weekStart.clone().endOf('week');
    const weekDates = []; // 각 주 마다의 일자 저장 배열

    // 일자 단위 첫 번째 for문
    for (let day = weekStart.clone(); day.isBefore(weekEnd); day.add(1, 'day')) {

      const dayFormat = day.format('YYYY-MM-DD');

      // td에 onMouseEnter 이벤트를 추가하여 '+' 버튼이 보이게 한다.
      const handleMouseEnter = () => {
        setButtonVisible(prevState => ({
          ...prevState,
          [dayFormat]: true
        }));
      };

      // onMouseLeave 이벤트를 추가하여 '+' 버튼을 숨긴다.
      const handleMouseLeave = () => {
        setButtonVisible(prevState => ({
          ...prevState,
          [dayFormat]: false
        }));
      };


      // '+' 버튼을 클릭했을 때는 해당 날짜의 input 박스 배열에 새로운 요소를 추가한다.
      const handleClick = () => {
        setInputBoxes(prevState => ({ // InputBoxes 업데이트
          ...prevState,
          [dayFormat]: [...(prevState[dayFormat] || []), '']
        }));
        setInputTexts(prevState => ({ // InputTexts 업데이트
          ...prevState,
          [dayFormat]: [...(prevState[dayFormat] || []), '']
        }));
      };


      // td태그 형태로  weekDates에 push
      weekDates.push(
        <td key={dayFormat} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {day.format('DD')}
          {buttonVisible[dayFormat] && <button onClick={handleClick}>+</button>}
          <br />
          {/* input 박스의 onChange 이벤트를 처리하여 입력된 텍스트를 state에 저장합니다. */}
          {(inputBoxes[dayFormat] || []).map((_, index) => (
            <div>
              <input
                key={index}
                type="text"
                value={inputTexts[dayFormat][index]}
                onChange={(e) => {
                  const newTexts = [...inputTexts[dayFormat]];
                  newTexts[index] = e.target.value;
                  setInputTexts(prevState => ({
                    ...prevState,
                    [dayFormat]: newTexts
                  }));
                }}
                style={{ width: '100px', height: '10px' }}
              />
              <br />
            </div>
          ))}
        </td>
      );
    }

    // tr태그에 담을 코드 생성
    const weekDatesTr = (
      <tr key={weekStart.format('YYYY-MM-DD')} >
        {weekDates}
      </tr>
    );

    weekDatesRow.push(weekDatesTr);
  }


  function monthTarget(e) {
    setMonth(e.target.value);
    setNameMonth(`(${e.target.name})`);
  }
  // 모든 일 수를 보여줄 수 있게 한다.

  return (
    <>
      {/* header 프로필 등록 등 예정 */}
      <header>
        <div>
          profile
        </div>
      </header>
      {/* 컴포넌트 생성 */}
      <h1>{month}{nameMonth}</h1>
      <div className='container'>
        {/* 월별 버튼 */}
        <div className='m_btn'>
          {
            allMonth.map((date, index) => (
              <button key={index} value={index + 1} name={date} onClick={monthTarget}>{date}</button>
            ))
          }
        </div>

        {/* 해당 날짜 달력 보여주기 */}
        <div className='month_view'>
          <div className='Calendar'>
            <table border='1'>
              <thead>
                {/* 해당 날짜 Header */}
                <tr>
                  {allDays.map((day, index) => (<td key={index}>{day}</td>))}
                </tr>
              </thead>
              <tbody>
                {weekDatesRow}
              </tbody>
            </table>
          </div>
        </div>
      </div >
      {/* 컴포넌트 생성 */}
    </>
  );
}

export default App;
