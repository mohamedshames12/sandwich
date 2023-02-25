import React, { useState } from 'react'
import MenuItem from './MenuItem'
import Footer from '../components/Footer'
const Menu = () => {
  const [search , setSearch] = useState("");
  const [meal, setMeal] = useState();

  const searchMeal = (e) => {
    if(e.key === "Enter"){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
          setMeal(data.meals)
        })
    }
  }


  return (
      <>
        <div className='menu-food'>
          <h1>popular foods</h1>
            <div className="search-btn">
            <input type="search" placeholder='search food' onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
            </div>
        </div>
        <div className='menuitems'>
           <div className="container-menuitems">
          {
            (meal == null) ? <p className='notfound'>Not Meals Found</p> : meal.map((res , key) => {
              return (
                <MenuItem data={res} key={key}/>
              )
            })
          }
            </div>
          </div>
          <Footer />
      </>
  )
}

export default Menu