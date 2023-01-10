import React, {useState, useRef} from "react";
import bfcIMG from '../itemImages/bfc.png'
import chaosScroll from './chaosScrollFunc'
import csIcon from '../itemImages/chaos-scroll.png'
import passFailMessage from "./passFailMessage";

function BlackfistCloak({updateCost}) {
  const attack = useRef(5)
  const [upgrades, setUpgrades] = useState(7)
  const firstEnchant = useRef(true)
  const [disabled, setDisabled] = useState(false)
  const [recentResult, setRecentResult] = useState()

  const reset = () => {
    if (disabled) return
    attack.current = 5
    firstEnchant.current = true
    setRecentResult()
    setUpgrades(7)
  }

  const csEffect = () => {
    if (disabled) return
    setDisabled(true)
    setTimeout(() => {setDisabled(false)}, 1000)
    if (upgrades > 0) {
      firstEnchant.current ? updateCost((wsCost) => {
        return Math.round((wsCost + 2.6) * 10) / 10
      }) : updateCost((wsCost) => {
        return Math.round((wsCost + 1.8) * 10) / 10
      })
      firstEnchant.current = false
      let result = chaosScroll()
      if (!result) {
        setRecentResult(false)
        return
      }
      setRecentResult(true)
      if (attack.current === 0 || attack.current + result[0] <= 0) {
        attack.current = 0
      } else {
        attack.current = attack.current + result[0]
      }
      setUpgrades((upgrades) => { return upgrades - 1})
    }
  }

  return (
    <>
      {passFailMessage(recentResult, 'Blackfist Cloak')}
      <div id='blackfist-cloak'>
        <div className="item-name">
          <img src={bfcIMG} alt='blackfist-cloak'></img>
          <h4>Blackfist Cloak</h4>
        </div>
        <div className="item-stats">
          <div className='item-remaining-upgrades'>Upgrades: {upgrades}</div>
          {attack.current === 0 ? null : <div>Weapon Attack: {attack.current}</div>}
        </div>
        <div className="item-reset-and-cs">
          <button className="reset-button" onClick={reset}>RESET</button>
          <img 
            src={csIcon} 
            alt='chaos-scroll-60%' 
            className="useCS"
            onClick={csEffect}
          ></img>
        </div>
      </div>
    </>
  )
}

export default BlackfistCloak