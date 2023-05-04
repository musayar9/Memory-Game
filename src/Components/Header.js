import React from 'react'
import { VscDebugRestart } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { resetFrameworks } from '../redux/frameworksSlice'
function Header() {
    const { point } = useSelector((state) => state.frameworks)
    const count = useSelector((state) => state.frameworks.count)
    const dispatch = useDispatch()
    return (

        <div className="container d-block  d-md-flex align-items-center justify-content-between mt-2 p-3 rounded-2 " style={{ backgroundColor: "#202020", zIndex: "100" }}>

            <div className='order-2 order-md-1'>
            <p className='text-capitalize text-danger fw-bolder fs-3 order-1 order-lg-2 d-flex d-md-none '>  To win you must exceed 400 points</p>
                <p className="text-center fs-4 text-light fw-bolder order-2 order-lg-1" >
                    Your's Point: <span className='text-primary'>{point}</span>
                </p>
            </div>
            <div className='mt-4 order-1 order-md-2'>
                <p className='text-capitalize text-danger fw-bolder fs-3 order-1 order-lg-2 d-none d-md-flex '>  To win you must exceed 400 points</p>

                <p className={`${count < 10 ? "text-danger" : "text-white"} badge fs-3 fw-3  bg-primary px-4 py-2`}> {count}</p>
            </div>
            <div className='order-3 order-md-3 '>
                <button className='btn btn-primary' onClick={() => dispatch(resetFrameworks())}><VscDebugRestart size={18} /> Reload Game</button>
            </div>
        </div>

    )
}

export default Header
