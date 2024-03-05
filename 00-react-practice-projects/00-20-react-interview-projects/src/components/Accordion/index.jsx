// single selection
import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordion() {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(curId) {
        setSelected(curId == selected ? null : curId)
    }

    function handleMultiClick(id) {
        let copyMultiple = [...multiple]
        const findIdxOfCurrId = copyMultiple.indexOf(id)
        console.log(findIdxOfCurrId)
        if (findIdxOfCurrId === -1) copyMultiple.push(id)
        else copyMultiple.splice(findIdxOfCurrId, 1)

        setMultiple(copyMultiple)
    }

    console.log(multiple)
    return (
        <>
            <div className="wrapper">
                <button onClick={(e) => {
                    setEnableMultiSelection(enableMultiSelection => !enableMultiSelection)
                    e.target.style.backgroundColor = `#${Math.round(Math.random() * 1000)}`
                }}>
                    Enable multi-selection
                </button>
                <div className="accordion">
                    {
                        (data && data.length) ?
                            data.map((dataItem) =>
                                <div key={dataItem.id} className="item">
                                    <div className="title"
                                        onClick={
                                            enableMultiSelection
                                                ? () => handleMultiClick(dataItem.id)
                                                : () => handleSingleSelection(dataItem.id)
                                        }
                                    >
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        enableMultiSelection ?
                                            multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> :
                                            selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                                    }

                                </div>) :
                            <div>
                                No data found
                            </div>
                    }
                </div>
            </div >
        </>
    )
}