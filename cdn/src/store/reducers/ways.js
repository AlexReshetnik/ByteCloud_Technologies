
import { act } from "react-dom/test-utils"
import { devicesDefaultState } from "./devices"
import { serverDefaultState } from "./server"
let devices = devicesDefaultState.devicesPosition
let servers = serverDefaultState.serverData


let defaultState = {
    ways: [],
    isCanShow:false
}

for (let i = 0; i < devices.length; i++) {
    const groupDev = devices[i];
    let l = 0
    for (const devKey in groupDev) {
        // let dev = groupDev[devKey]

        for (let j = 0; j < servers.length; j++) {
            //servers[j]
            defaultState.ways.push({
                serverId: j,
                deviceId: {
                    reg: i,
                    dev: devKey
                },
                points: [[],[],[]]
            })

        }
        l++;
    }

}
defaultState.ways = JSON.parse('[{"serverId":0,"deviceId":{"reg":0,"dev":"Phone"},"points":[[245,320],[919,297],[822,265]]},{"serverId":1,"deviceId":{"reg":0,"dev":"Phone"},"points":[[436,265],[902,304],[822,265]]},{"serverId":2,"deviceId":{"reg":0,"dev":"Phone"},"points":[[882,293],[846,274],[822,265]]},{"serverId":3,"deviceId":{"reg":0,"dev":"Phone"},"points":[[1255,500],[800,318],[822,265]]},{"serverId":0,"deviceId":{"reg":0,"dev":"Laptop"},"points":[[245,320],[829,208],[900,214]]},{"serverId":1,"deviceId":{"reg":0,"dev":"Laptop"},"points":[[436,265],[722,194],[900,214]]},{"serverId":2,"deviceId":{"reg":0,"dev":"Laptop"},"points":[[882,293],[946,234],[900,214]]},{"serverId":3,"deviceId":{"reg":0,"dev":"Laptop"},"points":[[1255,500],[1045,324],[900,214]]},{"serverId":0,"deviceId":{"reg":0,"dev":"Computer"},"points":[[245,320],[1023,332],[947,308]]},{"serverId":1,"deviceId":{"reg":0,"dev":"Computer"},"points":[[436,265],[1002,352],[947,308]]},{"serverId":2,"deviceId":{"reg":0,"dev":"Computer"},"points":[[882,293],[936,332],[947,308]]},{"serverId":3,"deviceId":{"reg":0,"dev":"Computer"},"points":[[1255,500],[1073,406],[947,308]]},{"serverId":0,"deviceId":{"reg":1,"dev":"Phone"},"points":[[245,320],[1317,330],[1199,290]]},{"serverId":1,"deviceId":{"reg":1,"dev":"Phone"},"points":[[436,265],[796,25],[1199,290]]},{"serverId":2,"deviceId":{"reg":1,"dev":"Phone"},"points":[[882,293],[1030,179],[1199,290]]},{"serverId":3,"deviceId":{"reg":1,"dev":"Phone"},"points":[[1255,500],[1365,354],[1199,290]]},{"serverId":0,"deviceId":{"reg":1,"dev":"Laptop"},"points":[[245,320],[1243,421],[1128,371]]},{"serverId":1,"deviceId":{"reg":1,"dev":"Laptop"},"points":[[436,265],[1244,449],[1128,371]]},{"serverId":2,"deviceId":{"reg":1,"dev":"Laptop"},"points":[[882,293],[1010,198],[1128,371]]},{"serverId":3,"deviceId":{"reg":1,"dev":"Laptop"},"points":[[1255,500],[1201,462],[1128,371]]},{"serverId":0,"deviceId":{"reg":1,"dev":"Computer"},"points":[[245,320],[1321,449],[1236,372]]},{"serverId":1,"deviceId":{"reg":1,"dev":"Computer"},"points":[[436,265],[1358,483],[1236,372]]},{"serverId":2,"deviceId":{"reg":1,"dev":"Computer"},"points":[[882,293],[1017,188],[1236,372]]},{"serverId":3,"deviceId":{"reg":1,"dev":"Computer"},"points":[[1255,500],[1302,418],[1236,372]]},{"serverId":0,"deviceId":{"reg":2,"dev":"Phone"},"points":[[245,320],[1510,763],[1384,665]]},{"serverId":1,"deviceId":{"reg":2,"dev":"Phone"},"points":[[436,265],[1366,816],[1384,665]]},{"serverId":2,"deviceId":{"reg":2,"dev":"Phone"},"points":[[882,293],[1290,796],[1384,665]]},{"serverId":3,"deviceId":{"reg":2,"dev":"Phone"},"points":[[1255,500],[1542,675],[1384,665]]},{"serverId":0,"deviceId":{"reg":2,"dev":"Laptop"},"points":[[245,320],[1186,499],[1347,623]]},{"serverId":1,"deviceId":{"reg":2,"dev":"Laptop"},"points":[[436,265],[1342,763],[1347,623]]},{"serverId":2,"deviceId":{"reg":2,"dev":"Laptop"},"points":[[882,293],[1282,755],[1347,623]]},{"serverId":3,"deviceId":{"reg":2,"dev":"Laptop"},"points":[[1255,500],[1440,629],[1347,623]]},{"serverId":0,"deviceId":{"reg":2,"dev":"Computer"},"points":[[245,320],[1345,678],[1294,645]]},{"serverId":1,"deviceId":{"reg":2,"dev":"Computer"},"points":[[436,265],[1322,709],[1294,645]]},{"serverId":2,"deviceId":{"reg":2,"dev":"Computer"},"points":[[882,293],[1245,686],[1294,645]]},{"serverId":3,"deviceId":{"reg":2,"dev":"Computer"},"points":[[1255,500],[1339,669],[1294,645]]},{"serverId":0,"deviceId":{"reg":3,"dev":"Phone"},"points":[[245,320],[236,274],[256,273]]},{"serverId":1,"deviceId":{"reg":3,"dev":"Phone"},"points":[[436,265],[332,196],[256,273]]},{"serverId":2,"deviceId":{"reg":3,"dev":"Phone"},"points":[[882,293],[482,349],[256,273]]},{"serverId":3,"deviceId":{"reg":3,"dev":"Phone"},"points":[[1255,500],[397,329],[256,273]]},{"serverId":0,"deviceId":{"reg":3,"dev":"Laptop"},"points":[[245,320],[342,284],[336,273]]},{"serverId":1,"deviceId":{"reg":3,"dev":"Laptop"},"points":[[436,265],[392,297],[336,273]]},{"serverId":2,"deviceId":{"reg":3,"dev":"Laptop"},"points":[[882,293],[504,342],[336,273]]},{"serverId":3,"deviceId":{"reg":3,"dev":"Laptop"},"points":[[1255,500],[521,345],[336,273]]},{"serverId":0,"deviceId":{"reg":3,"dev":"Computer"},"points":[[245,320],[269,352],[310,354]]},{"serverId":1,"deviceId":{"reg":3,"dev":"Computer"},"points":[[436,265],[385,381],[310,354]]},{"serverId":2,"deviceId":{"reg":3,"dev":"Computer"},"points":[[882,293],[383,383],[310,354]]},{"serverId":3,"deviceId":{"reg":3,"dev":"Computer"},"points":[[1255,500],[649,470],[310,354]]},{"serverId":0,"deviceId":{"reg":4,"dev":"Phone"},"points":[[245,320],[438,673],[467,645]]},{"serverId":1,"deviceId":{"reg":4,"dev":"Phone"},"points":[[436,265],[651,725],[467,645]]},{"serverId":2,"deviceId":{"reg":4,"dev":"Phone"},"points":[[882,293],[580,702],[467,645]]},{"serverId":3,"deviceId":{"reg":4,"dev":"Phone"},"points":[[1255,500],[766,772],[467,645]]},{"serverId":0,"deviceId":{"reg":4,"dev":"Laptop"},"points":[[245,320],[455,642],[494,583]]},{"serverId":1,"deviceId":{"reg":4,"dev":"Laptop"},"points":[[436,265],[568,624],[494,583]]},{"serverId":2,"deviceId":{"reg":4,"dev":"Laptop"},"points":[[882,293],[556,622],[494,583]]},{"serverId":3,"deviceId":{"reg":4,"dev":"Laptop"},"points":[[1255,500],[737,701],[494,583]]},{"serverId":0,"deviceId":{"reg":4,"dev":"Computer"},"points":[[245,320],[438,581],[446,540]]},{"serverId":1,"deviceId":{"reg":4,"dev":"Computer"},"points":[[436,265],[500,564],[446,540]]},{"serverId":2,"deviceId":{"reg":4,"dev":"Computer"},"points":[[882,293],[490,563],[446,540]]},{"serverId":3,"deviceId":{"reg":4,"dev":"Computer"},"points":[[1255,500],[479,560],[446,540]]}]')

//console.log(defaultState.ways);


const SETMAINPOINT = "SETMAINPOINT"
const SETCENTRALPOINT = "SETCENTRALPOINT"
const SHOWWAYS = "SHOWWAYS"
const HIDEWAYS = "HIDEWAYS"

export const ways = (state = defaultState, action) => {
    switch (action.type) {
        case SETMAINPOINT: {
            console.log(SETMAINPOINT);
            console.log(SETMAINPOINT);
            let { serverId, devId } = action

            let way = state.ways.find(way =>
                way.serverId == serverId
                && way.deviceId.reg == devId[0]
                && way.deviceId.dev == devId[1])


            way.points[0] = [servers[serverId].left + 25, servers[serverId].top + 25]
            way.points[1] = [servers[serverId].left, servers[serverId].top]

            if (devId[1] == "Computer") {
                way.points[2] = [devices[devId[0]][devId[1]].left + 25,
                devices[devId[0]][devId[1]].top + 35]
            } else if (devId[1] == "Laptop") {
                way.points[2] = [devices[devId[0]][devId[1]].left + 20,
                devices[devId[0]][devId[1]].top + 20]
            } else {
                way.points[2] = [devices[devId[0]][devId[1]].left + 28,
                devices[devId[0]][devId[1]].top]
            }


            state.ways = state.ways.slice()
            return { ...state }
        }
        case SETCENTRALPOINT: {
            let { serverId, devId } = action

            let way = state.ways.find(way =>
                way.serverId == serverId &&
                way.deviceId.reg == devId[0] &&
                way.deviceId.dev == devId[1])

            way.points[1] = action.point
            state.ways = state.ways.slice()
            return { ...state }
        }
        case SHOWWAYS: {
            state.isCanShow=true
            return { ...state }
        }
        case HIDEWAYS: {
            state.isCanShow=false
            return { ...state }
        }
     
        default:
            console.log(action);
            return state
    }
}