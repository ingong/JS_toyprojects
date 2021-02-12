    // 1. 1초마다 시계를 움직이게 setInterval 함수 및 콜백 함수 설정
    // 2. 시, 분, 초침을 querySelector 로 가져오기 
    // 3. 시침, 분침, 초침 움직이게 하는 함수 설정
      //- 생성자 함수로 현재 시간을 나타내는 함수 만들기
      //- 함수의 메소드로 현재 초 / 분 / 시 를 가져오기
      //- 해당하는 시간만큼 각도를 가질 수 있게 변수로 저장
      //- css 지정 style.css.transform 

const secondhand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minhand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours()
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);
setDate()


