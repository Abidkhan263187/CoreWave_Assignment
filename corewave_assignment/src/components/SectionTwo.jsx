import React from 'react'
import icon from './Images/Icon.png'
import symbol from './Images/symbol.png'
import tinyWave from './Images/tinywave.png'
import { TableRow } from './TableRow'
const SectionTwo = () => {
  return (
    <><div className="custom-table ">
      <div className='table-container  '>
        <div className='table-title'>
          <h1 className='stock'> <span>Stock</span> List</h1>
          <div className='search-frame'>
            <div className='input-frame'> <input className='input' type="text" placeholder='Search...' /> </div>
            <button className='btn-search'> Search</button>
          </div>
        </div>


        <div className='table-main  '>
          <div className="table-head  ">
            <div className='name'>Company Name</div>
            <div className='group'>
              <div className="group-items1">Last Price</div>
              <div className="group-items2">Change</div>
              <div className="group-items3">Chart</div>
              <div className="group-items4">Trade</div>
            </div>

          </div>

          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />

        </div>
      </div>
      <div className="btn-container ">
        <div className='custom-btn'>
          <span>View All</span>
          <div className='icon'>
            <img className="vector" src={icon} alt="icon" />
          </div>
        </div>
      </div>

    </div>
  
    </>



  )
}

export default SectionTwo