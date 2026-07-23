import { useState } from "react";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import GradeIcon from '@mui/icons-material/Grade';
export default function Card({ display, setDisplay , title }) {

  const [opened, setOpened] = useState();
  const [page, setPage] = useState(10);
  return (
    <main className="recipes-container">
      {!opened ? (
        <section className="recipes-grid">
          {title?.slice(0, page).map((item) => (
            <article className="recipe-card" key={item.id}>
              <div className="recipe-card-header">
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
              </div>

              <img
                className="recipe-image"
                src={`/${item.image_url}`}
                alt={item.title}
                onClick={() =>{ setOpened(item)
                   setDisplay(false)}}
              />

              <p className="recipe-description">
                {item.description}
              </p>

              <button
                className="view-recipe-btn"
              
                onClick={() =>{ setOpened(item)
                   setDisplay(false)}}
              >
                View Recipe
              </button>


            </article>
          ))}
           <button
            className="back-btn"
            onClick={() => setPage(pre=>(pre+30))}
          >
        More...
          </button>
        </section>
      ) : (
        <section className="recipe-details" key={opened.id}>
          <button
            className="back-btn"
            onClick={() => {setDisplay(true) 
              setOpened(null)}}
          >
            ← Back
          </button>

          <div className="details-header">
            <div className="details-title">
              <h1>{opened.title}</h1>
              <h2>{opened.subtitle}</h2>
              <h3>{opened.country.name}</h3>
            <img  style={{width: "30px" , height : "25px"}}src={opened.country.flag_image_url} alt="a"/>

            </div>

            <img
              src={`/${opened.image_url}`}
              alt={opened.title}
              onClick={() =>{setDisplay(true) 
              setOpened(null)}}
              className="details-image"
            />
          </div>

          <div className="details-content">
            <div className="info-card">
              <h3>Description</h3>
              <p className="description">
                {opened.description}
              </p>
            </div>

            <div className="info-card">
              <h3>Ingredients</h3>

              <div className="ingredients">
                {opened.ingredients.map((any, index) => (
                  <p key={index}>
                    {any.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>Instructions</h3>

              <ol className="instructions">
                {opened.instructions.map((any, index) => (
                  <li key={index}>
                    {any}
                  </li>
                ))}
              </ol>
            </div>calories
            <div className="info-card">
              <h3>nutrition</h3>

              <ol className="instructions">
               
                  <li >
                  Calories    { opened.nutrition.calories} CL
                  </li>
                  
                  <li >
                  Carbs    { opened.nutrition.carbs_g} g
                  </li>
                  
                  <li >
                  Estimated   { opened.nutrition.estimated} g
                  </li>
                  
                  <li >
                  Fat      { opened.nutrition.fat_g} g
                  </li>
                  
                  <li >
                  Protein{ opened.nutrition.protein_g} g
                  </li>
                
                
              </ol>
            </div>

            <div className="recipe-stats">
              <div className="stat-card">
                <span>Rating </span>
                <strong>
                  {opened.rating.value}/{opened.rating.out_of}
                  <image  ><GradeIcon/></image>
                </strong>
              </div>

              <div className="stat-card">
                <span>Cooking Time </span>
                <strong>
                  {opened.time_cook.minutes } min  
                  <image  ><AccessAlarmsIcon/></image>
                </strong>
              </div>
            </div>
          </div>
        </section>
      )}
     
    </main>
  );
}