
function BoilingVerdict({celsius}) {
    if(parseFloat(celsius) >= 100) {
        return "Water Is Boiling";
    }
    return "Water Is Not Boiling";
}

export default BoilingVerdict;