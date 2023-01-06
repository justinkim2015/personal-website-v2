console.log('hi')

const jpnButton = document.getElementById('jp-btn-desktop')
console.log(jpnButton)

jpnButton.addEventlistener('click', ()=> {console.log('click')})

function toggleLang() {
  console.log(document.querySelector('.eng'))
  console.log(document.querySelector('.jp'))

  let eng = document.querySelector('.eng')
  let jp = document.querySelector('.jp')
  console.log(eng)
  console.log(jp)
};

