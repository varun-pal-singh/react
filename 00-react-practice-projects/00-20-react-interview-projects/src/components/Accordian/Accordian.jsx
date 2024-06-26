import { useState } from "react"
import data from "./data"
import './styles.css'

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiselection, setMultiSelection] = useState(false);
  const [multipleId, setMultipleId] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let copyMultipleId = [...multipleId]
    const idxOfCurId = copyMultipleId.indexOf(id);
    if (idxOfCurId === -1) {
      copyMultipleId.push(id);
    } else {
      copyMultipleId.splice(idxOfCurId, 1);
    }
    console.log(copyMultipleId);
    setMultipleId(copyMultipleId);
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(prev => !prev)}>Enable multi-selection</button>
      <div className="accordian">
        {
          data && data.length > 0 ?
            data.map(dataItem => (
              <div className="item" key={dataItem} onClick={
                multiselection ?
                  () => handleMultiSelection(dataItem.id) :
                  () => handleSingleSelection(dataItem.id)}>
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  multiselection ?
                    multipleId.indexOf(dataItem.id) != -1 && (
                      <div className="content"> {dataItem.answer} </div>
                    ) :
                    selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )

                  // selected === dataItem.id ?
                  //   <div className="content">
                  //     {dataItem.answer}
                  //   </div> : null
                  // <div>No Data Found</div>
                }
              </div>
            ))
            : <div>No Data Found</div>
        }
      </div>
    </div>
  )
}

export default Accordian