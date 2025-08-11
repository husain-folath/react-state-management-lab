import { useState } from 'react';
import './App.css'

// src/App.jsx

const App = () => {
  // const [totalStrength,setTotalStrength]=useState(0)
  const [team, setTeam] = useState([])
  let totalStrength=  team.length===0? 0:  team.reduce((arr,fighter)=>{
        return arr+fighter.strength
      },0)
  let totalAgility=  team.length===0? 0:  team.reduce((arr,fighter)=>{
        return arr+fighter.agility
      },0)
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  function handleAddFighter(fighter)
  {
    if(money>=fighter.price)
    {
      setMoney(money-fighter.price)
      setTeam([...team,fighter])
      setZombieFighters(zombieFighters.filter((zombieFighter)=>{
        return !(zombieFighter.id===fighter.id)
     
      }))
      // setTotalStrength(totalStrength+fighter.strength)

      // console.log(totalStrength)
    }
    else
    {
      console.log("Not enough money");
    }
  }
  function handleRemoveFighter(fighter)
  {
    setTeam(team.filter((zombieFighter)=>{
        return !(zombieFighter.id===fighter.id)
      }))
      setZombieFighters([...zombieFighters,fighter])
      setMoney(money+fighter.price)

  }
  return (
    <>
      <h1>Hello world!</h1>
      <h3>money: {money}</h3>
      <h3>Strength: {totalStrength}</h3>
      <h3>Agility: {totalAgility}</h3>
      <h3>Your Fighters</h3>
      <ul>
        {
          team.length===0?<p>Pick some team members!</p>:team.map((zombieFighter) =>
          (
            <li>
              <img src={zombieFighter.img} alt="" /> <br />
              <strong>{zombieFighter.name}</strong> <br />
              Price: {zombieFighter.price} <br />
              Strength: {zombieFighter.strength} <br />
              Agility: {zombieFighter.agility} <br />
              <button onClick={()=>{handleRemoveFighter(zombieFighter)}}>Remove</button>
            </li>
          ))
        }
      </ul>
      <h3>Fighters</h3>
      <ul>
        {
          zombieFighters.map((zombieFighter) =>
          (
            <li>
              <img src={zombieFighter.img} alt="" /> <br />
              <strong>{zombieFighter.name}</strong> <br />
              Price: {zombieFighter.price} <br />
              Strength: {zombieFighter.strength} <br />
              Agility: {zombieFighter.agility} <br />
              <button onClick={()=>handleAddFighter(zombieFighter)}>Add</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App

