import React from "react";
import logo from "../../images/logos/transparent_no_shade.png";
import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.home} id="home">
      <div>
        <img className={style.logo} src={logo} alt="" />
      </div>
      <div>
        <h2>Welcome to MiniVans Bully Pham</h2>
        <p>
          Your go-to source for American Bully puppies in South Florida.
          <b>  We are a passionate family of dog lovers who take pride in producing
          only a select few litters of the finest American Bullies in South
          Florida</b>. Our limited breedings ensure that each pup receives the
          personal attention and care they deserve, resulting in healthy, happy,
          and well-socialized dogs.
        </p>
        <p>
          Our breeding program is carefully planned and executed to produce
          American Bullies that meet or exceed the breed standard. <b>  We take great
          care in selecting the right breeding pairs to produce puppies with
          stable temperaments, sound minds, and excellent conformation</b>.
        </p>
        <p>
          At MiniVans Bully Pham, we understand that adding a new pet to your
          family is a big decision, and we're here to guide you through the
          process. Our team is dedicated to matching the right puppy with the
          right family, ensuring that both the puppy and the family are happy
          and fulfilled.
        </p>
        <p>
          If you're looking for a strong, loyal companion that will be a loving
          addition to your family, look no further than MiniVans Bully Pham.
          Browse our website to see our available puppies and learn more about
          the American Bully breed.
        </p>
        <p>
          Thank you for considering MiniVans Bully Pham. We look forward to
          helping you bring home your new best friend!
        </p>
      </div>
    </div>
  );
};

export default Home;
