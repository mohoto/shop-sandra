import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectCount, increment, decrement} from '../../redux/reducers/counterSlice'

export default function Test() {

    const dispatch = useDispatch();
    const {count} = useSelector(selectCount);
    console.log('count:', count)

    return (
        <div className="container">
            <div className="row" style={{paddingTop: '50px'}}>
                <h1>{count}</h1>
                <button className="btn btn-primary" style={{marginBottom: '30px'}} onClick={() => dispatch(increment())}>Incremente</button>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decremente</button>
            </div>
        </div>
    )
}
