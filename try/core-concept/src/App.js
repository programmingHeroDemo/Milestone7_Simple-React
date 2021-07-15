import './App.css'

function App() {
    let name = 'Rakib Hasan'
    let style1 = {
        color: 'red',
        backgroundColor: 'black',
    }
    return (
        <div className="App">
            <header className="App-header">
                <p style={style1}>Hellow World. {name}</p>
                <h1 style={{ color: 'salmon' }}> On test </h1>
            </header>
        </div>
    )
}

export default App
