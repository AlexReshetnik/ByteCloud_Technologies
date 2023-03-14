
import { useSelector } from 'react-redux';
import Asterisk from './Asterisk/Asterisk';
import './style.scss';
function ItemTable({ data }) {
    const table = useSelector(state => state.table)

    function generateAsterisk() {
        let res = []
        let count = table.calcCountAsterisk(data.downloadTime)
        for (let i = 0; i < 5; i++) {
            res.push(<Asterisk key={i} fill={!(i > count)} />)
        }
        return res
    }

    return (
        <div className='ItemTable'>
            <h2 className='title'> {table.titles[data.id]}</h2>

            <div className='asterisks'>
                {generateAsterisk()}
            </div>
            <div>
                <div className='item' style={{ borderLeft: 0 }}>
                    Latency:
                    <span className='time'>{data.latency}
                        <span className="sec"> ms</span>
                    </span>

                </div>
                <div className='item' style={{ borderRight: 0 }}>
                    Download time:
                    <span className='time'>{data.downloadTime}
                        <span className="sec"> ms</span>
                    </span>
                </div>
            </div>
            <p>
                <span>Video streaming:</span>
                <span>{table.videoStreaming[table.calcCountAsterisk(data.downloadTime)]}</span>
            </p>
        </div >

    );
}

export default ItemTable;
