import React from 'react';

import drinks from '../../static/images/drinks.jpg';
// import fish from '../../static/images/fish.jpg';
import food from '../../static/images/food.jpg';
import events from '../../static/images/events.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__wrapper">
        <div className="about__text">
          <h1>WELCOME TO THE LOCKDOWN</h1>

          <span>Located next to overlooking the river Thames, The Lockdown is a restaurant & bar with cosy interiors and a warming fireplace, serving seasonal British food. Be it a light lunch, a lavish dinner or something sweet, our seasonally changing menu is packed full of flavour and is sure to tantalise your taste buds.  Our menu, with gluten-free, vegan and vegetarian options, makes us the best place for dinner!</span>

          <p>Don’t miss out, we look forward to seeing you soon!</p>

        </div>
        <div className="about__promos">

          <div>
            <img src={food} alt="" />
            <h2>OUR DELICIOUS FOOD</h2>
            <span>
              Our food is delicious, tasty, mouth-watering, appetizing, scrumptious, luscious, enjoyable, palatable, delightful, toothsome, pleasing, satisfying. Never tasteless, disgusting, or nauseating.
            </span>
          </div>
          <div>
            <img src={events} alt="" />
            <h2>PARTIES AND EVENTS</h2>
            <span>Looking for a venue for your next party, celebration or work event? With the ability to cater for up to 200 people in 4 semi-private bookable spaces, we are the go to destination for birthday celebrations, engagements and office parties.
            </span>
          </div>
          <div>
            <img src={drinks} alt="" />
            <h2>Coctails</h2>
            <span>An alcoholic drink is a drink that contains ethanol, a type of alcohol produced by fermentation of grains, fruits, or other sources of sugar. The consumption of alcohol plays an important social role in many cultures.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;