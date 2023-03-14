


let defaultState = {
    isShowTable: false,
    byteCloud: [
        {}, {}, {}, {}, {}
    ],
    objectStorage: [
        {}, {}, {}, {}, {}
    ],
    titles: [
        "Europe",
        "Asia",
        "Oceania",
        "North America",
        "South America"
    ],
    videoStreaming: [
        "420p",
        "720p HD ready",
        "1080p Full HD",
        '4K/2160p Ultra HD',
        '4K/2160p Ultra HD'
    ],


}
//defaultState = JSON.parse('{"isShowTable":true,"byteCloud":[{"id":0,"downloadTime":"162","latency":"200"},{"id":1,"downloadTime":"232","latency":"286"},{"id":2,"downloadTime":"142","latency":"175"},{"id":3,"downloadTime":"113","latency":"140"},{"id":4,"downloadTime":"430","latency":"530"}],"objectStorage":[{"id":0,"downloadTime":"586","latency":"723"},{"id":1,"downloadTime":"237","latency":"292"},{"id":2,"downloadTime":"145","latency":"179"},{"id":3,"downloadTime":"1064","latency":"1312"},{"id":4,"downloadTime":"866","latency":"1069"}],"titles":["Europe","Asia","Oceania","North America","South America"],"videoStreaming":["420p","720p HD ready","1080p Full HD","4K/2160p Ultra HD","4K/2160p Ultra HD"]}')

export let calcCountAsterisk = (time) => {
    let res = 5
    if (time > 200) {
        res = 5
    }
    if (time > 400) {
        res = 4
    }
    if (time > 600) {
        res = 3
    }
    if (time > 800) {
        res = 2
    }
    if (time > 1000) {
        res = 1
    }
    return res - 1
}


const SHOWTABLE = "SHOWTABLE"
const HIDETABLE = "HIDETABLE"
const OBJECT_STORAGE_DATA = "OBJECT_STORAGE_DATA"
const BYTE_CLOUD_DATA = "BYTE_CLOUD_DATA"

export const table = (state = defaultState, action) => {
    switch (action.type) {
        case SHOWTABLE:
            state.isShowTable = true
            return { ...state }
        case HIDETABLE:
            state.isShowTable = false
            return { ...state }
        case OBJECT_STORAGE_DATA:
            state.objectStorage[action.id] = {
                id: action.id,
                downloadTime: (+action.time).toFixed(0),
                latency: (+action.time * 1.234).toFixed(0)
            }
            return { ...state }
        case BYTE_CLOUD_DATA:
            state.byteCloud[action.id] = {
                id: action.id,
                downloadTime: (+action.time).toFixed(0),
                latency: (+action.time * 1.234).toFixed(0)
            }
            return { ...state }
          

        default:
            return state
    }
}