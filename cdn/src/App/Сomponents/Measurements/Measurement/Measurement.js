import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

function Measurement({ position, id }) {
    const server = useSelector(state => state.server.serverData)
    const animation = useSelector(state => state.animation)
    const dispatch = useDispatch()
    let [time, setTime] = useState(0)
    useEffect(() => {
        if (animation.stage == "STOP_RED_ANIMATION" ||
            animation.stage == "STOP_BLUE_ANIMATION") return () => { }

        let main
        if (animation.stage == "RED_ANIMATION") {
            main = server.find((it) => it.isMain)
        }

        if (animation.stage == "BLUE_ANIMATION") {


            main = server.map((it) => {
                let length = ((it.top - position.top) ** 2 + (it.left - position.left) ** 2) ** 0.5
                return { ...it, length }
            })
            let min = 100000
            let id

            for (const it of main) {
                if (it.length < min) {
                    min = it.length
                    id = it
                }
            }


            main = id
        }


        setTime(0)
        let length = ((main.top - position.top) ** 2 + (main.left - position.left) ** 2) ** 0.5
        let FullTIME = animation.animationDuration - 1500
        let countFPS = 50


        let intervslID = setInterval(() => {
            setTime((prev) => (+prev + (length / countFPS)).toFixed(2))
        }, FullTIME / countFPS);

        setTimeout(() => {
            clearInterval(intervslID)
            setTime(prev => {
                if (animation.stage == "RED_ANIMATION") {
                    dispatch({ type: "OBJECT_STORAGE_DATA", time: prev, id })
                }
                if (animation.stage == "BLUE_ANIMATION") {
                    dispatch({ type: "BYTE_CLOUD_DATA", time: prev, id })
                }
                return prev
            })


        }, FullTIME);

        return () => {
            setTimeout(() => {
                clearInterval(intervslID)
            });
        }

    }, [animation.stage])
    return (
        <div className='Measurement' style={position}>

            Time: {time} ms<br></br>
            Latency:  {(+time * 1.234).toFixed(2)} ms
        </div>
    );
}

export default Measurement;
