// 0. 무조건 하나씩 하나씩 되는지 확인하면서 천천히 하기, 욕심내면 안된다
// 1. 클릭했을 때 소리가 나게하기
// - 오디오 탐색 : e.
// - 예외처리
// - 오디오 실행
// - 예외 처리 
// 2. 클릭했을 때 색깔 및 소리의 변화


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing')
}

// 3. class 제거    
const keys = document.querySelectorAll('.key');
Array.from(keys).forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)