const scaleName = {
    c: "Celsius",
    f: "Fahrenheit"
}

function TempatureInput({temperature,scale,temperatureHandler}) {
    return (
        <div>
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}:</legend>
                <input type="text" value={temperature} onChange= {(e) => temperatureHandler(e,scale)} />
            </fieldset>
        </div>
    )
}

export default TempatureInput;
