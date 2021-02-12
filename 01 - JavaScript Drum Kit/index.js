// 21.01.29 FRI
// 1. 클릭했을 때 소리가 나게함
//  - 오디오 탐색 : e.keyCode
//!  - 예외처리
//  - 오디오 실행
//  - 오디오 바로실행되게 
// 2. 클릭했을 때 색깔 및 소리의 변화
//   - 키 탐색
//   - 예외처리
//   - class 추가 
// 3. class 제거    
//!  - defer 가 문제였다니...
//!  - 함수에서 객체를 참조할 때 변수가 정의 되지 않았으므로 this 로 받는다는 놀라운 사실...
//   - 다시 되돌아 오지 않는다 


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    // 선택되지 않은 키를 눌럿을 때는 아무것도 반환하지 않게 한다
    
    audio.currentTime =0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)
