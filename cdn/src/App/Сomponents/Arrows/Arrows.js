import './style.scss';
import { Arrow } from 'react-absolute-svg-arrows';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BasisCurve, BasisOpenCurve, CardinalCurve, Line } from 'react-svg-curve';
import CreateArrow from './CreateArrow/CreateArrow';

function Arrows() {

    const ways = useSelector(state => state.ways)
    const animation = useSelector(state => state.animation)
    const server = useSelector(state => state.server.serverData)

    function generate() {

        let devices = [...document.querySelectorAll(".Devices>*")]

        if (animation.stage == "RED_ANIMATION" || animation.stage == "STOP_RED_ANIMATION") {
            let id = document.querySelector(".MainServer")?.getAttribute('serverid')
            return ways.ways.map((way, i) => {
                if (devices.find(i => way.deviceId.reg == i.getAttribute('reg')
                    && way.deviceId.dev == i.getAttribute('dev'))
                    && id == way.serverId) {
                    return <BasisCurve key={i} style={{ animationDuration: animation.animationDuration + "ms" }} data={[...way.points]} showPoints={false} />
                }
            })
        }

        if (animation.stage == "BLUE_ANIMATION" || animation.stage == "STOP_BLUE_ANIMATION") {

            for (const dev of devices) {

                let y1 = parseFloat(dev.style.top)
                let x1 = parseFloat(dev.style.left)
                let SERCHserverID = null
                let MINLenght = 1000000;

                for (let i = 0; i < server.length; i++) {
                    if (!server[i].active) continue;
                    let y2 = server[i].top
                    let x2 = server[i].left
                    let Lenght = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
                    if (Lenght < MINLenght) {
                        MINLenght = Lenght
                        SERCHserverID = i
                    }

                }
                dev.setAttribute("SERCHserverID", SERCHserverID)
            }

            return devices.map(device => (
                ways.ways
                    .find(way => (way.serverId == device.getAttribute('SERCHserverID') && way.deviceId.reg == device.getAttribute('reg') && way.deviceId.dev == device.getAttribute('dev')))

            )).map((way, i) => (<BasisCurve key={i}
                style={{ animationDuration: animation.animationDuration + "ms" }}
                data={[...way.points]}
                showPoints={false} />)
            )
        }
    }


    return (
        <div className='Arrows' >
            <svg id='svg' >
                {ways.isCanShow ? generate() : undefined}
            </svg>

        </div >
    );
}

export default Arrows;
