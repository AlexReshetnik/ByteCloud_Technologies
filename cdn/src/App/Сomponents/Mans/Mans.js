import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupMan from "./GroupMan/GroupMan";

function Mans() {
    const dispatch = useDispatch()

    const mans = useSelector(state => state.mans)
    const clouds = useSelector(state => state.clouds)

    useEffect(() => {
        if (clouds.isShowCloud) return
        if (mans.mans.find(it => !it.countActivenMan) == undefined) {
            dispatch({ type: "HIDEMANS" })
            dispatch({ type: "SHOWCLOUD" })
          
        }
    })
    return (
        <>
            {
                mans.isShowMans ?
                    <div className="Mans">
                        {mans.mans.map((it, i) => !it.countActivenMan ? <GroupMan
                            key={i}
                            idGroup={i}
                            position={it.positionMans}
                        /> : undefined)}
                    </div>
                    : undefined
            }

        </>

    );
}

export default Mans;
