import { useEffect, useState } from "react"


export default function RandomColor() {
    const [color, setColor] = useState('black')
    const [typeOfColor, setTypeOfColor] = useState('hex')

    function randomVal(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomVal(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGBColor() {
        let color = null
        color = `rgb(${randomVal(256)}, ${randomVal(256)}, ${randomVal(256)})`
        setColor(color)
    }

    useEffect(() => {
        if (typeOfColor === 'hex')  handleCreateRandomHexColor()
        else handleCreateRandomRGBColor()
    }, [typeOfColor])

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    return (
        <div className="container">
            <button onClick={
                () => typeOfColor === 'hex' ?
                    handleCreateRandomHexColor() :
                    handleCreateRandomRGBColor()
            }>Generate Random Color</button>
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '16px',
                marginTop: "50px",
            }}>
                <h3>{typeOfColor === 'hex' ?
                    'HEX COLOR: ' :
                    'RGB COLOR: '
                }</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}