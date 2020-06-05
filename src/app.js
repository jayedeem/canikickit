import Navbar from './components/Navbar'
import Ranking from './components/Ranking'
import Card from './components/Card'


async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Navbar()}
      ${await Card()}
      ${await Ranking()}
      
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;