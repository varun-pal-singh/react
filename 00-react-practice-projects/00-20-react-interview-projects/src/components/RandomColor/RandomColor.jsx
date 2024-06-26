import { useEffect, useState } from "react";
import './styles.css';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');

    function generateRGBColor() {
        let newColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
        console.log(newColor);
        setColor(newColor);
    }

    function generateHEXColor() {
        const values = '1233456789ABCDEF';
        let newColor = ['#'];
        for (let i = 0; i < 6; i++) {
            newColor.push(values.charAt(Math.floor(Math.random() * values.length)));
        }
        newColor = newColor.join('');
        console.log(newColor);
        setColor(newColor);
    }

    useEffect(() => {
        if (typeOfColor === 'hex') {
            generateHEXColor();
        } else {
            generateRGBColor();
        }
    }, [typeOfColor])

    return <>
        <div className="container"
            style={{
                width: '100vw',
                height: '100vh',
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>RGB Color</button>
            <button onClick={
                typeOfColor === 'hex' ?
                    () => generateHEXColor() :
                    () => generateRGBColor()
            }>Generate Random Color</button>

            <div className=""
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '20px',
                    marginTop: '50px',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                <h3>{typeOfColor === 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    </>
}