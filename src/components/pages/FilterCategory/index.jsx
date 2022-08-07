import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function FilterCategory() {
  const [filterCategory, setFilterCategory] = useState([]);
  const params = useParams();
  const categoryName = params.categoryName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        setFilterCategory(response.meals);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <BaseLayout>
      <section id="categories" className="py-20 flex flex-col items-center">
        <p className="subtitle mb-2">Let’s Try!</p>
        <h3 className="heading-3 mb-16">{categoryName} Meals</h3>
        <div className="flex flex-wrap gap-10 justify-center">
          {filterCategory &&
            filterCategory.map((item) => (
              <Link key={item.idMeal} to={`/meal/${item.idMeal}`}>
                <div
                  className="img-category"
                  style={{
                    backgroundImage: `url(${item.strMealThumb})`,
                  }}
                >
                  <div className="transbox-meal">
                    <p className="title-meal hidden">{item.strMeal}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </BaseLayout>
  );
}
