import { useEffect, useState } from 'react'

function App() {
    const man = [
        { name: 'biskut pagla', age: 1000 },
        { name: 'halum', age: 15 },
        { name: 'tuktuki', age: 11 },
        { name: 'akri', age: 10 },
        { name: 'shiku', age: 12 },
    ]

    const [userData, setuserData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setuserData(data))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello Akfa..!</h1>
            </header>


            {userData.map((m) => (
                <Nayok name={m.name} key={m.id} age={m.company.name}></Nayok>
            ))}

            <Nayok name={man[0].name} age={man[0].age}></Nayok>

            <MovieCount></MovieCount>
            {man.map((m) => (
                <Nayok name={m.name} age={m.age}></Nayok>
            ))}
            
        </div>
    )
}

const MovieCount = () => {
    const countStyle = {
        textAlign: 'right',
        margin: '20px',
        border: '2px solid green',
        borderRadius: 20,
        padding: '10px',
    }

    const [count, setcount] = useState(0)

    const click = () => setcount(count + 1)

    return (
        <div style={countStyle}>
            <button onClick={click}>add movie</button>

            <MovieDisplay number={count}></MovieDisplay>
            <MovieDisplay number={count + 10}></MovieDisplay>
        </div>
    )
}

const MovieDisplay = (props) => <h4>Movies I have accted : {props.number}</h4>

const Nayok = (props) => {
    const nayokStyle = {
        textAlign: 'center',
        margin: '20px',
        border: '2px solid red',
        borderRadius: 20,
    }

    return (
        <div style={nayokStyle}>
            <h1>Ami "{props.name}" </h1>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
                amar boyosh: {props.age}
            </p>
        </div>
    )
}
export default App
