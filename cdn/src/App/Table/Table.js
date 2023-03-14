import { useDispatch, useSelector } from 'react-redux';
import ItemTable from './ItemTable/ItemTable';

import './style.scss';
function Table() {
    const dispatch = useDispatch()
    const table = useSelector(state => state.table)

    if (!table.isShowTable) return
    function generate(e) {
        let res = []
        for (let i = 0; i < table.byteCloud.length; i++) {
            if (table.byteCloud[i].id == undefined) continue
            res.push(<ItemTable key={i} data={table.byteCloud[i]} ></ItemTable>)
            res.push(<ItemTable key={i + 100} data={table.objectStorage[i]}></ItemTable>)
        }

        return res
    }
    function onClickHandler(e) {
       // dispatch({ type: "HIDETABLE" })
        dispatch({ type: "ALLNEW" })
    }
    return (
        <div className='Table'>
            <div className='contents'>

                <span className='Maintitle'>ByteCloud</span>
                <span className='Maintitle'>Object storage</span>

                {generate()}
                <div className='btn-exit' onClick={onClickHandler}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.18951 0.539854C1.73419 -0.00482096 2.61728 -0.00482096 3.16195 0.539854L6.82482 4.20272L10.4877 0.539854C11.0324 -0.00482096 11.9155 -0.00482096 12.4601 0.539854C13.0048 1.08453 13.0048 1.96762 12.4601 2.51229L8.79726 6.17516L12.4601 9.83803C13.0048 10.3827 13.0048 11.2658 12.4601 11.8105C11.9155 12.3551 11.0324 12.3551 10.4877 11.8105L6.82482 8.1476L3.16195 11.8105C2.61728 12.3551 1.73419 12.3551 1.18951 11.8105C0.644837 11.2658 0.644837 10.3827 1.18951 9.83803L4.85238 6.17516L1.18951 2.51229C0.644838 1.96762 0.644838 1.08453 1.18951 0.539854Z" fill="#4CA8F9" />
                    </svg>

                </div>
            </div >

        </div>

    );
}

export default Table;
