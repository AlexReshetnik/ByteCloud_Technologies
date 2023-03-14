import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Man from './Man/Man';
import ManActive from './ManActive/ManActive';
import './style.scss';

function GroupMan({ position, idGroup }) {

    const dispatch = useDispatch()
    let [countActive, setCountActive] = useState(0)
    let [stateS, setStateS] = useState([{
            active: false,
            width: "27",
            height: "50"
        },{
            active: false,
            width: "32",
            height: "59"
        },{
            active: false,
            width: "37",
            height: "68"
        }
    ])


    function onMouseEnterHandler(e) {

        let number = 0
        if (e.currentTarget.className.includes('man_s3')) {
            number = 3

        } else if (e.currentTarget.className.includes('man_s2')) {
            number = 2

        } else if (e.currentTarget.className.includes('man_s1')) {
            number = 1
        }

        setStateS((prev) => prev.map((item, i) => i < number ? ({ ...item, active: true }) : item))
        setCountActive(number)
    }

    function onMouseLeaveHandler(e) {
        setCountActive(0)
    }
    function onClickHandler(e) {
        dispatch({ type: "SETCOUNTACTIVE", countActive, idGroup })
        dispatch({ type: "SETACTIVEMEASUREMENT", idGroup })
    }

    return (
        <div className={`mans`} onClick={onClickHandler} style={position}>
            {stateS.map((state, i) =>
                <div key={i}
                    className={`man man_s${i + 1}`}
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                >
                    {i < countActive ? <ManActive size={state} /> : <Man size={state} />}
                </div>
            )}
        </div>
    );
}

export default GroupMan;
