import './App.css';
import './components/items/ItemComponents.css'
import React, { useState } from 'react';//, { useState, useRef, useEffect }
import Introduction from './components/Introduction';
import ItemSelect from './components/ItemSelect'
import Statistics from './components/Statistics';
import Footer from './components/Footer';

import Facestompers from './components/items/Facestompers';
import BlackfistCloak from './components/items/BlackFistCloak';
import AngelicBlessing from './components/items/AngelicBlessing';
import OZBelt from './components/items/OZBrilliantBelt';
import TimelessMoonlight from './components/items/TimelessMoonlight';

function printEquip(state, costFunc) {
  let whichToScroll;
  if (state === "Facestompers") whichToScroll = <Facestompers updateCost={costFunc}/>;
  if (state === "Blackfist Cloak") whichToScroll = <BlackfistCloak updateCost={costFunc}/>;
  if (state === "Angelic Blessing") whichToScroll = <AngelicBlessing updateCost={costFunc}/>;
  if (state === "OZ's Brilliant Belt") whichToScroll = <OZBelt updateCost={costFunc}/>;
  if (state === "Timeless Moonlight") whichToScroll = <TimelessMoonlight updateCost={costFunc}/>;
  return whichToScroll
}

function ShowWSCost({cost}) {
  return (
    <div className='total-expense'>Total Expense: {cost} WS</div>
  )
}

function App() {
  const [chosenItem, setChosenItem] = useState('Facestompers')
  const [wsCost, setWsCost] = useState(0)
  return (
    <div className="App">
      <Introduction />
      <ItemSelect itemChoose={setChosenItem}/>
      {printEquip(chosenItem, setWsCost)}
      <ShowWSCost cost={wsCost} />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;

//todo: css, create price tags

  //const firstUpdated = useRef(false);
  //useEffect(() => {
  //  if (firstUpdated.current === false) {
  //    firstUpdated.current = true;
  //    return
  //  }
  //}, [])
