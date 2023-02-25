import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = (getMeal) => {
    console.log(getMeal.data)
  return (
        <div className="box-menuitems">
                <img src={getMeal.data.strMealThumb} alt="" />
                <div className="details">
                    <h2>{getMeal.data.strMeal}</h2>
                    <Link className='link' to={getMeal.data.strSource}>whact video</Link>
                </div>
            </div>
  )
}

export default MenuItem