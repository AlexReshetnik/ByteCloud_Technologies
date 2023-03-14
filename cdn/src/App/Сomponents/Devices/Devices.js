
import Phone from './Phone/Phone';
import Laptop from './Laptop/Laptop';
import Computer from './Computer/Computer';

import './style.scss';
import { useSelector } from 'react-redux';


function Devices() {
    const mans = useSelector(state => state.mans.mans)
    const devices = useSelector(state => state.devices.devicesPosition)

    return (
        <div className='Devices'>
            {devices.map((it, i) => [
                <Phone key={0} reg={i}  position={it.Phone} />,
                <Laptop key={1} reg={i} position={it.Laptop} />,
                <Computer key={2} reg={i}  position={it.Computer} />,
            ].slice(0, mans[i].countActivenMan))}

        </div>
    );
}

export default Devices;
