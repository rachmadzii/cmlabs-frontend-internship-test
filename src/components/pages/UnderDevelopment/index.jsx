import BaseLayout from 'components/layout/BaseLayout';
import React from 'react';

export default function UnderDevelopment() {
  return (
    <BaseLayout>
      <section className="hero py-20 flex flex-col justify-center items-center">
        <h1 className="heading-1 mb-5 text-center">
          404 <br /> Not Found
        </h1>
        <p className="subtitle mb-12 text-center">
          Sorry, the page you are looking for is under development. <br />
          Please check back later.
        </p>
      </section>
    </BaseLayout>
  );
}
