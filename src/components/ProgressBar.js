import React from 'react'

const ProgressBar = ({lable , progress , color , target}) => {
  return (
    <>
    <div className='lable d-flex align-items-center justify-content-between mb-4'>
        <h5>{lable}</h5>
        <div className='progress d-flex align-items-center'>
            {progress}
        </div>
    </div>

        <div className="progressbar" style={{background:'#EFEFEF' , borderRadius:'10PX'}}>
        <div className="progressbar-color" style={{height:'16px',width:'45%' , background:color , borderRadius:'10PX'}}></div>
    </div>

    <div className='progressbar-bottom d-flex justify-content-between mt-3'>
       <p>0</p>
       <p className='target'>{target}</p>
    </div>
    </>
  )
}

export default ProgressBar
