const user = {
    name: "varun",
    doing: "coding",
}

function DisplayData(){
    return(
        <>
            <h1 style={{backgroundColor: 'orange'}}>
                Hello I'm, {user.name}
            </h1>
            <p className={user.imageUrl}>doing coding</p>
        </>
    )
}

export default DisplayData;