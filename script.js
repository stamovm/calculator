const outputScr = document.getElementById('output')
const btnContainer = document.querySelector('.btn-container')
let btnVal = [
  '7',
  '8',
  '9',
  '-',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '/',
  '0',
  '.',
  'C',
  '*',
  '(',
  ')',
  '<-',
  '=',
]

btnVal.forEach((val) => {
  const btn = document.createElement('button')
  btn.id = 'btn-' + val
  btn.textContent = val
  btn.classList.add('btn-calc')
  btn.addEventListener('click', () => btnClick(val))
  btnContainer.appendChild(btn)
})

function btnClick(val) {
  switch (val) {
    case '=':
      outputScr.innerText = eval(outputScr.innerText)
      break
    case 'C':
      outputScr.innerText = '0'
      break
    case '<-':
      outputScr.innerText = outputScr.innerText.slice(0, -1)
      if (outputScr.innerText.length <= 0) {
        outputScr.innerText = '0'
      }
      break
    default:
      if (outputScr.innerText === '0') {
        outputScr.innerText = ''
      }
      outputScr.innerText += val

      break
  }
}
