import React from 'react'
import symbol from './Images/symbol.png'
import tinyWave from './Images/tinywave.png'
export const TableRow = () => {
  return (
    <div className='table-row  d-flex align-items-center'>
            <div className='bit-icon-container'>
              <img src={symbol} alt="symbol" />
            </div>
            <div className="group-bitcoin d-flex  align-items-center">
              <p> Bitcoin</p>
              <p>BTC</p>

            </div>
            <div className='group2  d-flex align-items-center' >
              <div className='frame1'> <p className='frame1-value'> $56,623.54 </p></div>
              <div className='frame2'><p className='frame-value2'>+1.41% </p></div>
              <div className='frame3'> <img src={tinyWave} alt='tinyWave' className='frame-value-inner'/></div>
             <div className='frame4'> <p className='frame-values4'><button className='frame4-btn1'>Sell</button><button className='frame4-btn2'>Buy</button> </p></div>
            </div>
          </div>
  )
}
