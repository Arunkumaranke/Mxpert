import {useDispatch} from 'react-redux'
import { carList } from '../redux/action'
import { useSelector} from 'react-redux'
import { useEffect } from 'react'
import TableData from './TableData'

const Main=() => {
    const dispatch = useDispatch()
    let data = useSelector((state) => state.tableData);
    

    return(
        <>
        
     
        <div className='product-container'>
            <TableData data={data} />
        </div>
        </>
    )
}
export default Main;