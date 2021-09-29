const textElement = document.getElementById('text')
const optionsButtons = document.getElementById('option-buttons')




let state = {}


function startGame() {

state = {}
showTextNode(1)

}



function showTextNode(textNodeIndex) {


}



function selectOption(option) {


  
}

const textNode = [
  {
      id: 1,
      text: 'Du wachst auf näherst du dich diesem blauen objekt yeet.'
      options: [
        {
          text: 'Nehmen goo',
          setState: { blueGoo: true},
          nextText: 2
        },
        {
          text: 'Lass das Goo'
          nextText: 2
        }
      ]
  },
  {
    id: 2
  }

]

startGame()
