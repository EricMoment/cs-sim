import React from "react";
import './Statistics.css'
import fs_overall from './itemImages/facestompers-overall.png'
import fs_zoomed from './itemImages/facestompers->5.png'

function Statistics() {
  return (
    <div className="statistics">
      <h3>A lil bit of context:</h3>
      <h4>
        Dream MS uses White Scroll (ws) as currency for large transactions. White scroll prevents 
        number of upgrades from decreasing in case of fails. Chaos Scrolls
        only have 60% chance to pass, so players use 1 Chaos scroll and 1 White Scroll per upgrade. 
      </h4>
      <h4>
        A character can earn around 36 White Scrolls per week. Some players create extra characters
        in order to obtain more White Scrolls.
      </h4>
      <h4>At the time of writing, 1 cs equals 0.8 ws, and the price of each equipment is as follows:</h4>
      <ul>
        <li id="e1">Facestompers: 2.5 ws </li>
        <li id="e2">Blackfist Cloak: 0.8 ws</li>
        <li id="e3">Angelic Blessing: 14 ws</li>
        <li id="e4">OZ's Brilliant Belt: 15 ws</li>
        <li id="e5">Timeless Moonlight: ranging from 4ws to 8ws depending on initial stats</li>
      </ul>
      <h4>Upgrading each equipment max number of times would require (+ Max / 0.6) sets of
        cs and ws. For example, Facestompers need 9 / 0.6 = 15 ws and cs sets. 15 cs equals 12 ws, so getting
        <strong> +9 Facestompers </strong> needs approximately 29.5 ws. The market price for 19 attack Facestompers is 30 ws, which 
        means players want Facestompers to have equal to or higher than 19 attack to profit. 
      </h4>
      <h4>For equipments with main stats, Total Weapon Attack is (Weapon Attack + the highest stat of (STR, LUK, DEX) / 4). 
          Example: 10 weapon attack + 8 LUK = 12 weapon attack</h4>
      <h4>1 INT equals 1 Magic Attack in Dream MS, so Total Magic Attack = Magic Attack + INT</h4>
      <h4>Stats for each equipment (+ Max) needed to breakeven the cost: </h4>
      <ul>
        <li id="e1">Facestompers: 19 Weapon Attack </li>
        <li id="e2">Blackfist Cloak: 19 Weapon Attack</li>
        <li id="e3">Angelic Blessing: 12 Total Weapon Attack or 28 Total Magic Attack</li>
        <li id="e4">OZ's Brilliant Belt: 9 Total Weapon Attack or 26 Total Magic Attack</li>
        <li id="e5">Timeless Moonlight: 22 Total Weapon Attack or 40 Total Magic Attack</li>
      </ul>
      <h4>So, what is the probability to roll a 19 attack <strong>+9 Facestompers </strong>? Below is the simulation of upgrading <strong>+9 Facestompers </strong> 
        10 million times, with the assumption that players stop upgrading to move on to next when weapon attack is 4 or lower. 
      </h4>
      <div><img src={fs_overall} alt='facestomper-enchanting-results' ></img></div>
      <h4>There is a 78% chance Facestompers will end up worse, but let's zoom in</h4>
      <div><img src={fs_zoomed} alt='facestomper-enchanting-results-5-or-higher'></img></div>
      <h4>The cumulative probability of 19 or higher Facestompers is 5.7%.</h4>
      <h4>Other equipments have similar distributions, in that there is at least 70% chance they will end up worse.</h4>
      <h4>In conclusion, buying + max equipments from others is the prefered choice, but if one
        were to defeat RNGesus and create a mega attack equipment, they would save a huge amount of expenses. A casino game.
      </h4>
    </div>
  )
}

export default Statistics