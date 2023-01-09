import React from "react";
import './Statistics.css'
import fs_overall from './itemImages/facestompers-overall.png'
import fs_zoomed from './itemImages/facestompers->5.png'

function Statistics() {
  return (
    <div className="statistics">
      <h3>A lil bit of context:</h3>
      <h4>
        The Game uses White Scroll(ws) as currency for large transactions. White scroll prevents 
        number of upgrades from decreasing in case of enchanting fails. Chaos Scrolls
        only has 60% chance to pass, so most players use 1 Chaos scroll and 1 White Scroll per enchantment. 
      </h4>
      <h4>
        A character can earn around 36 White Scrolls per week. Hardcore players create extra characters
        in order to obtain more White Scrolls.
      </h4>
      <h4>At the time of writing, 1 Chaos Scroll equals 0.8 ws, and the price of each equip is as follows:</h4>
      <ul>
        <li id="e1">Facestompers: 2.5 ws </li>
        <li id="e2">Blackfist Cloak: 0.8 ws</li>
        <li id="e3">Angelic Blessing: 14 ws</li>
        <li id="e4">OZ's Brilliant Belt: 15 ws</li>
        <li id="e5">Timeless Moonlight: ranging from 4ws to 8ws depending on initial stats</li>
      </ul>
      <h4>Because Chaos Scrolls only have 60% chance to pass, upgrading each equipment max number of times would require (times / 0.6) sets of
        cs and ws. For example, Facestompers need 9 / 0.6 = 15 ws and cs sets. 15 cs equals 12 ws, so getting
        <strong> +9 Facestompers </strong> needs approximately 29.5 ws. The market price for 19 attack Facestompers is 30 ws, which 
        means players want Facestompers to have higher than 19 attack to profit. 
      </h4>
      <h4>However, what is the probability for it to happen? Below is the simulation of enchanting <strong>+9 Facestompers </strong> 
        10 million times, with the assumption that players stop enchanting to move on to next when weapon attack is 4 or lower. 
      </h4>
      <div><img src={fs_overall} alt='facestomper-enchanting-results' ></img></div>
      <h4>There is a 78% chance Facestompers will end up worse, but let's zoom in</h4>
      <div><img src={fs_zoomed} alt='facestomper-enchanting-results-5-or-higher'></img></div>
      <h4>The cumulative probability of 20 or higher Facestompers is 4.8%.</h4>
      <h4>Other equipments have similar distributions, in that there is at least 70% chance they will end up worse.</h4>
      <h4>In conclusion, buying fully enchanted equipments from others is the prefered choice, but if one
        were to defeat RNGesus and create a mega attack equipment, they would save a huge amount of expenses. A casino game.
      </h4>
    </div>
  )
}

export default Statistics