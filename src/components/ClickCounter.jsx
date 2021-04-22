import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
    const {count,incrementCounter} = props;

    return (
        <div>
            <button type="button" onClick={incrementCounter}>
                Button Click {count} Times
            </button>
        </div>
    )

}

export default withCounter(ClickCounter);