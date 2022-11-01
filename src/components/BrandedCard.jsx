import React, {useEffect} from 'react'
import axios from 'axios'

//!Branded Nutrition
const BrandedCard = ({food, key}) => {

//!Welp, need a design fix  
useEffect(()=>{
  axios.get(`https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${food.nix_item_id}`, {
    headers: {
      "x-app-id": "40b82218",
      "x-app-key": "0b053788ee5d2365587a6aa568240953",
    }
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
})

  return (
    <div>BrandedCard</div>
  )
}

export default BrandedCard