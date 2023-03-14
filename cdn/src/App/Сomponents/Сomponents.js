import { useDispatch, useSelector } from 'react-redux';
import Mans from './Mans/Mans';
import Devices from './Devices/Devices';
import './style.scss';
import Clouds from './Clouds/Clouds';
import Servers from './Servers/Servers';
import Arrows from './Arrows/Arrows';
import Measurements from './Measurements/Measurements';

function Сomponents() {
    return (
        <div className='Сomponents' >

            <Mans />
            <Devices />
            <Clouds />
            <Servers />
            <Arrows />
            <Measurements/>
        </div>
    );
}

export default Сomponents;
