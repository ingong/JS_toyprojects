// 1. input 값을 전부 가져온다.
// 2. input addEventListener 
//  - forEach 를 통해 각각의 input 에 대한 eventListener 설정
//  - input 의 값이 변화거나, mouse가 움직일 떄 (연속적인 변화) 를 감지
// 3. style 값을 변화시키는 함수 정의
//  - 해당하는 단위를 가져오는 변수를 dataset 을 통해 가져와서 suffix 라는 변수에 정의 (why? image 의 blur 처리를 할 때는 필요 없기 때문)
//  - document.documentElement.style.setProperty( key , value) 를 통해 값을 실제로 변화시킨다
const inputs = document.querySelectorAll('.controls input')

function handleChange() {
    const suffix = this.dataset.sizing || '';
    console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix)
}
inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mousemove', handleChange))