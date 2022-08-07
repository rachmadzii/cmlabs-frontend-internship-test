import React, { useEffect, useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        setCategories(response.categories);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <BaseLayout>
      <section className="hero py-20 flex flex-col justify-center items-center">
        <h1 className="heading-1 mb-5">
          Eat What You Cook <br /> With Us, Together!
        </h1>
        <p className="subtitle mb-12">
          When you eat something that cooked by <br />
          yourself, the happiness is priceless.
        </p>
        <button className="btn-menu">
          <a href="#categories">Decide a Menu</a>
        </button>
      </section>
      <section
        id="categories"
        className="pt-5 pb-20 flex flex-col items-center"
      >
        <p className="subtitle mb-2">Special to Try</p>
        <h3 className="heading-3 mb-16">See All Delicious Foods</h3>
        <div className="flex flex-wrap gap-10 justify-center">
          {categories.length &&
            categories.map((item) => (
              <Link key={item.idCategory} to={`/category/${item.strCategory}`}>
                <div
                  className="img-category"
                  style={{
                    backgroundImage: `url(${item.strCategoryThumb})`,
                  }}
                >
                  <div className="transbox-meal">
                    <p className="title-meal hidden">{item.strCategory}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </BaseLayout>
  );
}
