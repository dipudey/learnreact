export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}


export function convert(temperature,toConvert) {
    let input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ''; 
    }

    let output = toConvert(input);
    let rounded = Math.round(output * 1000)/1000;
    return rounded.toString();

}