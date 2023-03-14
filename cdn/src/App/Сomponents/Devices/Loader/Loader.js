
import { useSelector } from 'react-redux';
import './style.scss';

function Loader() {
    const animation = useSelector(state => state.animation)
    return (
        <>
            {
                (animation.stage == "RED_ANIMATION" || animation.stage == "BLUE_ANIMATION") ? (

                    < div className='Loader' >
                        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div >
                ) : undefined

            }
        </>


    );
}

export default Loader;
