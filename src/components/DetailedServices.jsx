import React from 'react';
import './DetailedServices.css';

const DetailedServices = () => {
  return (
    <section className="services-zigzag" id="services">
      <h2 className="section-title">Our Services</h2>

      <article className="svc-row">
        <div className="svc-content">
          <h3 className="svc-title">Web Development</h3>
          <p className="svc-desc">
            We create websites that combine aesthetics with performance. Whether it’s a sleek landing page, a
            full-scale web app, or a custom e-commerce store, our development process focuses on seamless
            experiences, responsive design, and future-ready scalability. Every line of code is crafted to deliver
            speed, stability, and elegance.
          </p>
        </div>
        <figure className="svc-visual">
          <img src="/service1.png" alt="Website Development" className="svc-img" />
        </figure>
      </article>

      <article className="svc-row reverse">
        <div className="svc-content">
          <h3 className="svc-title">Digital Marketing</h3>
          <p className="svc-desc">
            Marketing isn’t just about visibility — it’s about impact. We design campaigns that resonate with
            audiences through social media storytelling, creative content, SEO, and targeted ads. Blending strategy
            with creativity, we ensure your brand doesn’t just reach people, but leaves a lasting impression.
          </p>
        </div>
        <figure className="svc-visual">
          <img src="/service4.png" alt="Digital Marketing" className="svc-img" />
        </figure>
      </article>

      <article className="svc-row">
        <div className="svc-content">
          <h3 className="svc-title">Branding & Creative</h3>
          <p className="svc-desc">
            A brand is more than a logo — it’s a voice, a feeling, a presence. We craft timeless brand identities
            through thoughtful design, bold visuals, and motion storytelling. From guidelines to creative campaigns,
            our work transforms businesses into unforgettable brands.
          </p>
        </div>
        <figure className="svc-visual">
          <img src="/service3.png" alt="Branding & Creative" className="svc-img" />
        </figure>
      </article>
    </section>
  );
};

export default DetailedServices;
