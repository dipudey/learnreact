function ClickCounter({count,incrementCounter}) {

    return (
        <div>
            <button type="button" onClick={incrementCounter}>
                Clicked {count} Times
            </button>
        </div>
    )
}

export default ClickCounter;