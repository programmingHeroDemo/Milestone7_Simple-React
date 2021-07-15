function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello Rakib..!</h1>
                <Nayok name="rakib" age="28"></Nayok>
                <Nayok></Nayok>
            </header>
        </div>
    )
}

const Nayok = (props) => {
    const nayokStyle = {
        textAlign: 'center',
        margin: '20px',
        border: '2px solid red',
        borderRadius: 20,
    }

    return (
        <div style={nayokStyle}>
            <h1>Ami nayok "{props.name}" noi , ami director</h1>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
                I have done 5 movies in age: {props.age}
            </p>
        </div>
    )
}
export default App
