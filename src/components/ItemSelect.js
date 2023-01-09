import React from 'react';
import './ItemSelect.css'

const ItemSelect = ({itemChoose}) => {
  return (
    <div className='item-select'>
      <h4>Choose equipment: &nbsp;&nbsp;</h4>
      <select onChange={(e) => itemChoose(e.target.value)} className='item-choose'>
        <option value="Facestompers">Facestompers</option>
        <option value="Blackfist Cloak" >Blackfist Cloak</option>
        <option value="Angelic Blessing">Angelic Blessing</option>
        <option value="OZ's Brilliant Belt">OZ's Brilliant Belt</option>
        <option value="Timeless Moonlight">Timeless Moonlight</option>
      </select>
    </div>
  )
}

export default ItemSelect