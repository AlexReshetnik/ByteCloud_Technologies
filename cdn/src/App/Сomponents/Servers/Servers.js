import { useSelector } from "react-redux";
import MainServer from "./MainServer/MainServer";
import Server from "./Server/Server";
import './style.scss';

function Servers() {
    const serverData = useSelector(state => state.server.serverData)

    return (
        <div className="Servers">
            {serverData.map((it, i) => {
                if(!it.active)return
                if (it.isMain) {
                    return <MainServer key={i}serverId={i} position={it} />
                } else {

                } return <Server key={i}serverId={i} position={it} />
            })}
        </div>
    );
}

export default Servers;
