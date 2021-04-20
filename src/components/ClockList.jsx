import Clock from './Clock';

function ClockList({quantity}) 
{
    return (
        <div>
            { quantity.map(clock => 
                <Clock key={Math.random()}></Clock>
            ) }
        </div>
    );
}

export default ClockList;