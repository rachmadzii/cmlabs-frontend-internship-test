import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailMeal() {
  const [filterCategory, setFilterCategory] = useState([]);
  const params = useParams();
  const mealId = params.mealId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setFilterCategory(response.meals);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, [mealId]);

  function listIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`
        );
      } else {
        break;
      }
    }
    return ingredients;
  }

  return (
    <BaseLayout>
      <section id="categories" className="py-20 flex flex-col xl:px-28">
        {filterCategory &&
          filterCategory.map((item) => (
            <div key={item.idMeal}>
              <h2 className="heading-2 mb-4">{item.strMeal}</h2>
              <p className="subtitle mb-6">{item.strArea} Culinary</p>
              <hr className="mb-16" />
              <div className="flex flex-col md:flex-row md:space-x-12">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="img-detail md:w-1/2 md:h-1/2"
                />
                <div className="mt-14 md:mt-0">
                  <h3 className="heading-3 mb-7">Recipes</h3>
                  <ul className="recipes">
                    {listIngredients(item).map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="my-14">
                <h3 className="heading-3 mb-7">Instructions</h3>
                <p className="text-detail whitespace-pre-line">
                  {item.strInstructions}
                </p>
              </div>
              <div className="video-container">
                <iframe
                  className="video"
                  width="100%"
                  height="600"
                  src={item.strYoutube.replace('watch?v=', 'embed/')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video Recipe"
                />
              </div>
            </div>
          ))}
      </section>
    </BaseLayout>
  );
}
