function HoverCounter({count,incrementCounter}) {
    return (
        <div>
            <h1 onMouseOver={incrementCounter} >Hover {count} Times</h1>
        </div>
    )
}

export default HoverCounter;