import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close, matchFrameworks, open, unMatchFrameworks } from '../redux/frameworksSlice'
import { BsQuestionCircle } from "react-icons/bs"
function MemoryCard({ framework, isOpen }) {
    const [openCard, setOpencard] = useState(false)
    const openFramework = useSelector((state) => state.frameworks.openFramework)
    const frameworks = useSelector((state) => state.frameworks.frameworks)
    let statusFramework = frameworks.filter((framework) => framework.status)
    const countValue = useSelector((state) => state.frameworks.count)
    const isOkay = useSelector((state) => state.frameworks.isOkay)
    const [isDisabled, setIsDisabled] = useState(false)
    const [checking, setChecking] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        openCard && dispatch(open(framework.id))
    }, [dispatch, openCard, framework.id])

    useEffect(() => {
        if (openFramework.length === 2) {

            if (openFramework[0].name === openFramework[1].name) {

                framework.id === openFramework[0].id && dispatch(matchFrameworks())

                setOpencard(false)
                 setChecking(false)
            
            } else {
                setTimeout(() => {
                    openFramework.map((answer) => dispatch(close(answer.id)));
                    framework.id === openFramework[0].id && dispatch(unMatchFrameworks())
                    setChecking(false)
                }, 800)

                setOpencard(false)
            }
        }
    }, [openFramework, openFramework.length, frameworks, dispatch, framework.id])

    useEffect(() => {
        if (!isOkay) {
            setIsDisabled(true)
        }else if (statusFramework.length === 20){
            setIsDisabled(true)
        }
        else if (countValue < 0 && statusFramework.length !== 20) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [countValue, statusFramework, isOkay])

    return (

        <div className='d-flex align-items-center justify-content-center' >
            <div aria-disabled={isDisabled} className={`${isDisabled ? "is-disabled" : ""}    ${checking ? "pe-none " : framework.status ? "pe-none" : "pe-auto"} d-flex align-items-center justify-content-center rounded-3 p-0 p-sm-2 cardHeader`} onClick={()=>setOpencard(true)}   >
                <div className='cardBody'>
                    <div aria-disabled={checking} className={`position-relative rounded-3 shadow transitionCard ${framework.status && "transitionRotate"} 
                 
                    `}
                    >
                        <div className={`position-absolute d-flex align-items-center justify-content-center shadow rounded-3 bg-primary  cardQuestion`}>
                            <BsQuestionCircle className='text-light' size={48} />
                        </div>
                        <div className={`position-absolute rounded-3 text-info shadow rotateCard`}>
                            <div className={`card-image d-flex flex-column align-items-center rounded-3 justify-content-center shadow p-2  cardImage ${framework.status ? "bg-success" : "bg-danger"}`} >
                                <img className='p- sm-p-2 p-md-3 p-lg-4 cardImageStatus' src={"https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
                                    framework.name +
                                    ".png"} alt={framework.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MemoryCard
