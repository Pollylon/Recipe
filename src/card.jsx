import { useState } from "react";

export default function Card({ title }) {
  console.log(title);

  const [opened, setOpened] = useState();

  return (
    <main className="recipes-container">
      {!opened ? (
        <section className="recipes-grid">
          {title?.slice(0, 20).map((item) => (
            <article className="recipe-card" key={item.id}>
              <div className="recipe-card-header">
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
              </div>

              <img
                className="recipe-image"
                src={`/${item.image_url}`}
                alt={item.title}
                onClick={() => setOpened(item)}
              />

              <p className="recipe-description">
                {item.description}
              </p>

              <button
                className="view-recipe-btn"
                onClick={() => setOpened(item)}
              >
                View Recipe
              </button>
            </article>
          ))}
        </section>
      ) : (
        <section className="recipe-details" key={opened.id}>
          <button
            className="back-btn"
            onClick={() => setOpened(null)}
          >
            ← Back
          </button>

          <div className="details-header">
            <div className="details-title">
              <h1>{opened.title}</h1>
              <h2>{opened.subtitle}</h2>
              <h3>{opened.cuisine.value}</h3>
            </div>

            <img
              src={`/${opened.image_url}`}
              alt={opened.title}
              onClick={() => setOpened(null)}
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
            </div>

            <div className="recipe-stats">
              <div className="stat-card">
                <span>Rating</span>
                <strong>
                  {opened.rating.value}/{opened.rating.out_of}
                </strong>
              </div>

              <div className="stat-card">
                <span>Cooking Time</span>
                <strong>
                  {opened.time_cook.minutes} min
                </strong>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}