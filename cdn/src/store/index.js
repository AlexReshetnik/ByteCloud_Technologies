import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import { mans } from "./reducers/mans"
import { devices } from "./reducers/devices"
import { clouds } from "./reducers/clouds"
import { server } from "./reducers/server"
import { ways } from "./reducers/ways"
import { animation } from "./reducers/animation"
import { measurement } from "./reducers/measurement"
import { table, calcCountAsterisk } from "./reducers/table"

let mainState

const appReducer = combineReducers({
    mans,
    devices,
    clouds,
    server,
    ways,
    animation,
    measurement,
    table
})


const rootReducer = (state, action) => {
    
    if (!mainState && state) {
        state.table.calcCountAsterisk = calcCountAsterisk
        mainState = JSON.parse(JSON.stringify(state))
    }

    if (action.type == "ALLNEW") {
        state = JSON.parse(JSON.stringify(mainState))
        state.table.calcCountAsterisk = calcCountAsterisk
    }
    return appReducer(state, action)
}

export const store = createStore(rootReducer, composeWithDevTools())
