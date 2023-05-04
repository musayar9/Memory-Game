import React from 'react'
import { VscDebugRestart } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { resetFrameworks } from '../redux/frameworksSlice'
function Header() {
    const { point } = useSelector((state) => state.frameworks)
    const count = useSelector((state) => state.frameworks.count)
    const dispatch = useDispatch()
    return (

        <div className="container d-flex align-items-center justify-content-between mt-2 p-3 rounded-2 " style={{ backgroundColor: "#202020", zIndex: "100" }}>

            <div>
                <p className="text-center fs-4 text-light fw-bolder" >
                    Your's Point: <span className='text-primary'>{point}</span>
                </p>
            </div>
            <div className='mt-4'>
                <p className='text-capitalize text-danger fw-bolder fs-3 '>  To win you must exceed 400 points</p>

                <p className={`${count < 10 ? "text-danger" : "text-white"} badge fs-3 fw-3  bg-primary px-4 py-2`}> {count}</p>
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => dispatch(resetFrameworks())}><VscDebugRestart size={18} /> Reload Game</button>
            </div>
        </div>

    )
}

export default Header
