import './style.scss';
import { Arrow } from 'react-absolute-svg-arrows';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasisCurve, BasisOpenCurve, CardinalCurve, Line } from 'react-svg-curve';


function CreateArrow() {
    const dispatch = useDispatch()

    let [isCreate, setIsCreate] = useState(false)
    let [serverId, setServerId] = useState()
    let [devId, setDevId] = useState([])
    let [isSETMAINPOINT, setisSETMAINPOINT] = useState(false)
    let [isCanMove, setIsCanMove] = useState(false)

    function ClickCreate(e) {
        setIsCreate(true)
    }
    function ClickFinish(e) {
        setIsCanMove(false)
        setIsCreate(false)
        setServerId(null)
        setDevId([])
        setisSETMAINPOINT(false)
      
    }

    useEffect(() => {
        document.addEventListener('click', onClickHanler)
        document.addEventListener('mousedown', mousedown)
        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)
        return () => {
            document.removeEventListener('click', onClickHanler)
            document.removeEventListener('mousedown', mousedown)
            document.removeEventListener('mousemove', mousemove)
            document.removeEventListener('mouseup', mouseup)
        }
    })
  
    function mousedown(params) {
        if(isSETMAINPOINT){
            console.log(isSETMAINPOINT);
            setIsCanMove(true)
        }
       
    }
    function mousemove(e) {
        if (isCanMove) {
            dispatch({ type: "SETCENTRALPOINT", serverId, devId, point: [e.x,e.y] })
        }
    }
    function mouseup(e) {
        setIsCanMove(false)
    }
    function onClickHanler(e) {

        if (!e.composedPath || !isCreate) return
        if (!serverId) {
            let server = e.composedPath().find(i => (i.className == "Server" || i.className == "MainServer"));
            if (server) {
                setServerId(server.getAttribute("serverid"))
              
            }

        }
        if (devId.length == 0) {
            let devise = e.composedPath().find(i => (i.className == "Phone" || i.className == "Laptop" || i.className == "Computer"));
            if (devise) {
                setDevId([devise.getAttribute("reg"), devise.getAttribute("dev")])
            }

        }
       
        if (!isSETMAINPOINT) {
            if (serverId && devId.length != 0) {
                dispatch({ type: "SETMAINPOINT", serverId, devId })
                setisSETMAINPOINT(true)
            }
        }

    }

    return (
        <div className='CreateArrow'>

            <button style={{ top: "20px" }} onClick={ClickCreate}>Create {serverId + " - " + devId}</button>
            <button style={{ top: "20px" }} onClick={ClickFinish}>Finish</button>
            {isCreate ? <svg>

            </svg> : undefined}
        </div >
    );
}

export default CreateArrow;
