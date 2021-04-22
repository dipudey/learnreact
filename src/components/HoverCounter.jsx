import withCounter from "./HOC/withCounter";

function HoverCounter(props) {
    const {count,incrementCounter} = props;
    return (
        <div>
            <h1 onMouseOver={incrementCounter}>Mouse Hover {count} Times</h1>
        </div>
    )
}

export default withCounter(HoverCounter);