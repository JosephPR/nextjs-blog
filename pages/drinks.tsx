import Layout from '../components/layout'



function Drinks({ data }) {
    console.log(data.drinks)
    return <Layout home={false} >
     {data.drinks.map((drink) => {
        console.log(drink)

        return <div key={drink.idDrink}>
          
            <h1>{drink.strDrink} </h1>
            {/* <p>Type: <em>{drink.strAlcoholic}</em></p> */}
            <p>{drink.strInstructions}</p>
            <img  src={drink.strDrinkThumb}/>

            <h3>Serve in a {drink.strGlass}</h3>
        <ul key={drink.idDrink}>
            <li>{drink.strMeasure1} {drink.strIngredient1}</li>
            <li>{drink.strMeasure2} {drink.strIngredient2}</li>
            {drink.strMeasure3 ?
             <li>{drink.strMeasure3} {drink.strIngredient3}</li> :
             <br />
            }
            {drink.strMeasure4 ?
             <li>{drink.strMeasure4} {drink.strIngredient4}</li> :
             <br />
            }
             {drink.strMeasure5 ?
             <li>{drink.strMeasure5} {drink.strIngredient5}</li> :
             <br />
            }
             {drink.strMeasure6 ?
             <li>{drink.strMeasure6} {drink.strIngredient6}</li> :
             <br />
            }
             {drink.strMeasure7 ?
             <li>{drink.strMeasure7} {drink.strIngredient7}</li> :
             <br />
            }
         

            

        </ul>
        </div>
       
     })}
     
    </Layout>  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php/filter.php?a=Alcoholic`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  

  export default Drinks