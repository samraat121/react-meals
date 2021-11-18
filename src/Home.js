import React,{ useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(function (response) {
            console.log(response.data);
            setItems(response.data.meals)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    const itemslists = items.map((obj)=>{
        return(
            <div className='col-md-4 mb-5'>
                <img className="img-fluid" src={obj.strMealThumb} alt={obj.strMeal} />
                <strong>{obj.idMeal}. {obj.strMeal}</strong>
            </div>
        )
    })



    return (
        <div className='container'>
            <h1>Meals App Shop Page</h1><hr />
            <div className='row'>
                {itemslists}
            </div>
            
        </div>
    )
}

export default Home
