import React, { useState, useRef } from "react";
import ozIMG from '../itemImages/oz.png'
import chaosScroll from './chaosScrollFunc'
import csIcon from '../itemImages/chaos-scroll.png'
import passFailMessage from "./passFailMessage";

const initialStats = {
  'STR': 1,
  'DEX': 1,
  'INT': 1,
  'LUK': 1,
  'Weapon Attack': 1,
  'Magic Attack': 5
}

function OZBrilliantBelt({updateCost}) {
  const stats = useRef({ ...initialStats })
  const [upgrades, setUpgrades] = useState(5)
  const firstEnchant = useRef(true)
  const [disabled, setDisabled] = useState(false)
  const [recentResult, setRecentResult] = useState()


  const reset = () => {
    if (disabled) return
    stats.current.STR = 1;
    stats.current.DEX = 1;
    stats.current.INT = 1;
    stats.current.LUK = 1;
    stats.current["Weapon Attack"] = 1;
    stats.current["Magic Attack"] = 5;
    firstEnchant.current = true
    setRecentResult()
    setUpgrades(5)
  }

  const csEffect = () => {
    if (disabled) return
    setDisabled(true)
    setTimeout(() => {setDisabled(false)}, 1000)
    if (upgrades > 0) {
      firstEnchant.current ? updateCost((wsCost) => {
        return Math.round((wsCost + 15 + 1.8) * 10) / 10
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
      if (stats.current.STR + result[0] <= 0 || stats.current.STR === 0) {
        stats.current.STR = 0
      } else { stats.current.STR = stats.current.STR + result[0] }

      if (stats.current.DEX + result[1] <= 0 || stats.current.DEX === 0) {
        stats.current.DEX = 0
      } else { stats.current.DEX = stats.current.DEX + result[1] }

      if (stats.current.INT + result[2] <= 0 || stats.current.INT === 0) {
        stats.current.INT = 0
      } else { stats.current.INT = stats.current.INT + result[2] }

      if (stats.current.LUK + result[3] <= 0 || stats.current.LUK === 0) {
        stats.current.LUK = 0
      } else { stats.current.LUK = stats.current.LUK + result[3] }

      if (stats.current["Weapon Attack"] + result[4] <= 0 || stats.current["Weapon Attack"] === 0) {
        stats.current["Weapon Attack"] = 0
      } else { stats.current["Weapon Attack"] = stats.current["Weapon Attack"] + result[4] }

      if (stats.current["Magic Attack"] + result[5] <= 0 || stats.current["Magic Attack"] === 0) {
        stats.current["Magic Attack"] = 0
      } else { stats.current["Magic Attack"] = stats.current["Magic Attack"] + result[5] }

      setUpgrades((upgrades) => { return upgrades - 1 })
    }
  }

  return (
    <>
      {passFailMessage(recentResult, "OZ's Brilliant Belt")}
      <div id='oz-brilliant-belt'>
        <div className="item-name">
          <img src={ozIMG} alt='oz-brilliant-belt'></img>
          <div>OZ's Brilliant Belt</div>
        </div>
        <div className="item-stats">
          <div className='item-remaining-upgrades'>Upgrades: {upgrades}</div>
          {stats.current.STR === 0 ? null : <div className='item-stats-STR'>STR: {stats.current.STR}</div>}
          {stats.current.DEX === 0 ? null : <div className='item-stats-DEX'>DEX: {stats.current.DEX}</div>}
          {stats.current.INT === 0 ? null : <div className='item-stats-INT'>INT: {stats.current.INT}</div>}
          {stats.current.LUK === 0 ? null : <div className='item-stats-LUK'>LUK: {stats.current.LUK}</div>}
          {stats.current["Weapon Attack"] === 0 ? null : <div className='item-stats-weapon-attack'>Weapon Attack: {stats.current["Weapon Attack"]}</div>}
          {stats.current["Magic Attack"] === 0 ? null : <div className='item-stats-magic-attack'>Magic Attack: {stats.current["Magic Attack"]}</div>}
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

export default OZBrilliantBelt