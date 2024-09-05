import React from 'react';
import Button from 'components/Button';

export const Cards = ({title , children , className='card'}) =>{
    return (
        <div className={className} >
            <h5>{title} :</h5>
            {children}
        </div>

    )
}

export const WidgetHeader = ({title , text , link , rightArrow})=>{
    return (
        <div className='widget-header d-flex justify-content-between w-100 pb-3'>
           <h5>{title}</h5> 
           <Button text={text} link={link} rightArrow={rightArrow}/>
        </div>
    )
}

const Widget = ({children}) => {
  return (
    <>
      <div className='widget d-flex flex-wrap'>
        {children}
      </div>
    </>
  )
}

export default Widget
