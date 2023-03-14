import { useSelector } from "react-redux";
import Measurement from "./Measurement/Measurement";


function Measurements() {

    const measurement = useSelector(state => state.measurement)
    const animation = useSelector(state => state.animation)
 
    return (
        <div className='Measurements' >

            {measurement.isShowMeasurement ? (
                measurement.measurementPosition.map((it, i) => (
                    it.active ? <Measurement key={i}  id={i} position={it}></Measurement> : undefined
                ))) : undefined
            }

           
        </div>
    );
}

export default Measurements;
