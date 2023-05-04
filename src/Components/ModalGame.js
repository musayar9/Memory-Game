import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { countFramework, resetFrameworks } from '../redux/frameworksSlice';
import { useEffect, useState } from 'react';
import { GiBrain } from 'react-icons/gi'



function ModalGame() {
  const frameworks = useSelector((state) => state.frameworks.frameworks)
  let completeFrameworks = frameworks.filter((framework) => framework.status)
  const { point } = useSelector((state) => state.frameworks)
  const [welcome, setWelcome] = useState(false)
  const dispatch = useDispatch()
  const [modal, setModal] = useState(true)
  const [pointText, setPointText] = useState("")
  const countValue = useSelector((state) => state.frameworks.count)
  const [count] = useState(1)
  const [current, setCurrent] = useState(0)
  
  const newGame = () => {

    if (current) {
      clearInterval(current)
      setCurrent(0)

      return;
    }
    const counter = setInterval(() => {
      dispatch(countFramework(count))
    }, 1000)
    setCurrent(counter)
    dispatch(resetFrameworks())
    setModal(false)
  }
  useEffect(() => {
    if (completeFrameworks.length === 20) {
      setModal(true)
      setWelcome(true)
      if (point > 600) {
        setPointText("Genius")
      } else if (point >= 500 && point < 599) {
        setPointText("Intelligent")

      } else if (point > 300 && point < 499) {
        setPointText("successful")
      }
      else if (point > 201 && point < 299) {
        setPointText("Eat Walnuts")
      } else if (point < 200) {
        setPointText("eat lots of walnuts and hazelnuts")
      }
    } else{
      if (point > 600) {
        setPointText("Genius")
      } else if (point >= 500 && point < 599) {
        setPointText("Intelligent")

      } else if (point > 300 && point < 499) {
        setPointText("successful")
      }
      else if (point > 201 && point < 299) {
        setPointText("Eat Walnuts")
      } else if (point < 200) {
        setPointText("eat lots of walnuts and hazelnuts")
      }
    }
    if (countValue < 0 && completeFrameworks.length !== 20) {
      setModal(true)
      setCurrent(0)
      setWelcome(true)
    }

  }, [modal, point, completeFrameworks, countValue, dispatch])

  return (
    <>
      {
        modal && (
          <div
            className="modal show"
            style={{ display: 'block', position: 'absolute', top: "150px" }}
          >
            <Modal.Dialog >
              <Modal.Header className='fs-2 fw-bold d-flex align-items-center justify-content-center' style={{ color: "#d63384" }}>

                <GiBrain size={48} className='ms-3 fw-bolder' />
                <span className='ms-2'>Memory Game</span>
              </Modal.Header>

              <Modal.Body>
                <Modal.Title>

                  {welcome ? <>
                    {completeFrameworks.length === 20 ?

                      <>
                        {
                          point > 400 ? <img className='w-50 h-25' src={"https://img.freepik.com/premium-vector/congratulations-banner-template-with-balloons-confetti_619130-1027.jpg"} alt="congrutalitons" />

                            : <img src={"https://cdn-icons-png.flaticon.com/512/4372/4372342.png"} alt="lose" className='w-50 h-25' />
                        }
                      </>
                      : <>
                       

                        {countValue < 0 ? <>
                          <p className='text-warning fs-3 fw-bold'>Time is Up! </p>
                          <img src={"https://img.freepik.com/premium-vector/time-s-up-watch-3d-vector-icon-timer-symbol-illustration_716564-112.jpg?w=2000"} alt="lose" className='w-25 h-25' />

                        </> : <>
                          <img src={"https://www.kindpng.com/picc/m/172-1725279_you-lose-graphic-you-lost-icon-hd-png.png"} alt="lose" className='w-25 h-25' />

                        </>

                        }

                      </>
                    }
                  </> :
                    <>
                      <img src={"https://cdn-icons-png.flaticon.com/512/5578/5578628.png"} alt="welcome" className='w-50 h-25' />     
                    </>

                  }

                </Modal.Title>
               
                <ul className='list-unstyled'>
                <li className='fs-4 fw-bolder text-black text-capitalize'>{welcome ?<>Your's Point: <span className='fw-bold text-primary'>{point}</span></> :<>
                your starting score: <span className='text-primary fw-bold'>{point}</span> 
                </>} </li>

                {welcome || <>
                  <li className='text-capitalize fs-5 fw-bolder text-black'>points for correct answers: <span className='fw-bold text-success'>+50</span></li>
                    <li className='text-capitalize  fs-5 fw-bolder text-black'>points for error answers:  <span className='fw-bold text-danger'>-10</span></li>
                    <li className='text-capitalize  fs-5 fw-bolder text-black'>you have 90 seconds to win:  <span className='fw-bold text-warning'>90</span></li>
                </>}
          
                </ul>
                <>    {point > 600 && <> <p className='text-capitalize  fs-4 fw-bold text-warning'>{pointText}</p>
                  <img alt="Genius" className='w-50 h-25 rounded-5' src={"https://i.ytimg.com/vi/i_LWl2vpvfE/maxresdefault.jpg"} />
                  <p className='fs-5  fw-bolder text-capitalize '>well done damn dog</p>
                </>}
                  {point >= 500 && point < 599 && <>    <p className='text-capitalize fs-4 fw-bold text-warning'>{pointText}</p>
                    <img alt="Brain" className='w-25 h-25' src={"https://emojigraph.org/media/apple/nerd-face_1f913.png"} />
                  </>}
                  {point > 300 && point < 499 && <><p className='text-capitalize fs-4 fw-bold text-warning'>{pointText}</p>
                    <img alt="walnuts" className='w-25 h-25 ' src={"https://cdn.dribbble.com/users/1292088/screenshots/9526341/media/fe10b026049426a3189d2c4614250301.jpg?compress=1&resize=400x300"} />
                  </>}
                  {point > 201 && point < 299 && <><p className='text-capitalize fs-4 fw-bold text-warning'>{pointText}</p>
                    <img alt="walnuts" className='w-25 h-25 ' src={"https://media.istockphoto.com/id/813141786/tr/vekt%C3%B6r/ifade-etmek-patates-ifade.jpg?s=612x612&w=0&k=20&c=tfMlh6abE1l9DoURjncnBLuudbY7L6jYH1MbzB8FrnY="} />
                  </>}
                  {point < 200 && <>
                    <p className='text-capitalize fs-4 fw-bold text-warning'>{pointText}</p>
                    <img alt="hazeknuts" className='w-25 h-25' src={"https://media.istockphoto.com/id/856170562/tr/foto%C4%9Fraf/deli-emoji-beyaz-arka-plan-%C3%BCzerinde-aptal-y%C3%BCz-ifade-3d-render-izole.jpg?s=612x612&w=0&k=20&c=F1Ir2MilCZBhEcsyyBQmuqCunEZU95y7iIHFt8QUzIo="} />
                  </>}
                </>
              </Modal.Body>

              <Modal.Footer className='d-flex align-items-center justify-content-center'>
               <Button variant={welcome ? `secondary` : `primary`} onClick={newGame}>
                  {countValue === 0 || welcome ? "New Game" : "Start Game"}</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        )
      }
    </>

  );
}

export default ModalGame;