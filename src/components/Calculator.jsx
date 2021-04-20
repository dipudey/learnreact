import React from 'react'
import TempatureInput from './TempatureInput';
import BoilingVerdict from './BoilingVerdict';
import {toCelsius,toFahrenheit,convert} from '../lib/Converter';

class Calculator extends React.Component {

    state = {
        temperature: '',
        scale:  ''
    };

    temperatureHandler = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale,
        });
    } 

    render() {
        const {temperature,scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div >
                <TempatureInput temperatureHandler={this.temperatureHandler} scale="c" temperature={celsius} />
                <br/>
                <br/>
                <TempatureInput temperatureHandler={this.temperatureHandler} scale="f" temperature={fahrenheit} />
                <br/><br/>
                <BoilingVerdict celsius={celsius} />
            </div>
        )
    }
}

export default Calculator;