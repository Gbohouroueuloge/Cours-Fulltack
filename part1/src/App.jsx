const Hello = (pros) => {
  return (
    <div>
      <p>Salut je m'appelle {pros.name} et j'ai {pros.age} ans</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="John" age="25"/>
      <Hello name="Jane"/>
    </div>
  )
}

export default App