
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Сomponents from './Сomponents/Сomponents';
import Map from './Map/Map';
import { useEffect } from 'react';
import Table from './Table/Table';

function App() {

  const dispatch = useDispatch()
  const mans = useSelector(state => state.mans.mans)
  const clouds = useSelector(state => state.clouds)
  const animation = useSelector(state => state.animation)

  useEffect(() => {
    if (clouds.cloudPosition.filter(i => !i.active).length > 3) {
      if (animation.stage == "NONE") {
        dispatch({ type: "SHOWWAYS" })
        dispatch({ type: "RED_ANIMATION" })
      }
    }

    if (animation.stage == "RED_ANIMATION") {
      dispatch({ type: "SHOWMEASUREMENT" })
      setTimeout(() => {
        dispatch({ type: "STOP_RED_ANIMATION" })
      }, animation.animationDuration - 1500)
    }
  })

  function onClickHandler(e) {

    if (animation.stage == "NONE" && mans.filter(it => it.countActivenMan).length > 1) {
      dispatch({ type: "HIDEMANS" })
      dispatch({ type: "SHOWCLOUD" })
    }

    if (clouds.cloudPosition.filter(i => !i.active).length > 2) {
      if (animation.stage == "NONE") {
        dispatch({ type: "SHOWWAYS" })
        dispatch({ type: "RED_ANIMATION" })
        dispatch({ type: "HIDEALLCLOUD" })

      }
    }

    if (animation.stage == "STOP_RED_ANIMATION") {
      dispatch({ type: "BYTECLOUDDATA" })
      dispatch({ type: "HIDEMEASUREMENT" })
      dispatch({ type: "SHOWMEASUREMENT" })
      dispatch({ type: "BLUE_ANIMATION" })
      setTimeout(() => {
        dispatch({ type: "STOP_BLUE_ANIMATION" })
      }, animation.animationDuration - 1500)
    }

    if (animation.stage == "STOP_BLUE_ANIMATION") {
      dispatch({ type: "SHOWTABLE" })
      
    }

  }

  return (
    <div className="App">
      <div className='container'>
        <Map>
          <Сomponents />
        </Map>
        <Table></Table>

        <button onClick={onClickHandler} >NEXT</button>
     
      </div>
    </div>
  );
}

export default App;
