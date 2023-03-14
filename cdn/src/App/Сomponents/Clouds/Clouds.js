
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import Cloud from './Cloud/Cloud';

function Clouds() {
    const clouds = useSelector(state => state.clouds)
   
    return (
        <div className="Clouds">
            {clouds.isShowCloud ?
                clouds.cloudPosition.map((cloud, i) => cloud.active?
                <Cloud key={i} idCloud={i} position={cloud} />:undefined)
                : undefined
            }
        </div>
    );
}

export default Clouds;
