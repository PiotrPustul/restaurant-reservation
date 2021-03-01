import React from 'react'

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <h1>MAIN MENU</h1>
      <div className="menu__wrapper">

        <div className="menu__name">
          <h2 className="menu__heading">SMALL DISHES & LIGHT BITES</h2>
          <div className="menu__container">
            <div className="menu__meal">
              <p className="menu__title">
                Buffalo mozzarella, roasted figs, truffle</p>
              <p className="menu__price"> £8 </p>
            </div>
            <div className="menu__meal">
              <p className="menu__title">
                Turkey & apricot Scotch Egg
               </p>
              <p className="menu__price"> 6.5</p>
            </div>
            <div className="menu__meal">
              <p className="menu__title">
                Salt baked beetroot, roast artichoke, orange & chicory salad
            </p>
              <p className="menu__price"> 7</p>
            </div>
            <div className="menu__meal">
              <p className="menu__title">
                Butlers secret cheddar & Guinness rarebit
              </p>
              <p className="menu__price"> 7.5 </p>
            </div>
            <div className="menu__meal">
              <p className="menu__title">
                Pea & Devonshire crab cake, watercress & pickled fennel salad
             </p>
              <p className="menu__price"> 9 </p>
            </div>
            <div className="menu__meal">
              <p className="menu__title">
                Angus beef blade croquettes, horseradish cream
            </p>
              <p className="menu__price">
                7.5
            </p>
            </div>
          </div>
        </div>

        <div className="menu__name">
          <h2 className="menu__heading">SHARES</h2>
          <div className="menu__container">

            <div className="menu__meal">
              <p className="menu__title">
                Baked Camembert (v) garlic & rosemary, onion jam, truffle honey, foccacia
              </p>
              <p className="menu__price"> £16   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                British Charcuterie. Coppa, air-dried Cumbrian ham, Suffolk salami & chorizo, goat's cheese, sun dried tomatoes, gherkins, bread
               </p>
              <p className="menu__price"> £20</p>
            </div>

          </div>
        </div>

        <div className="menu__name">
          <h2 className="menu__heading">MAINS</h2>
          <div className="menu__container">

            <div className="menu__meal">
              <p className="menu__title">
                The Lockdown burger, cheese, ale onions, shredded lettuce, ketchup, mayo, pickles, fries
              </p>
              <p className="menu__price"> £15.75   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                Beer battered cod, triple cooked chips, mushy peas, tartare sauce

              </p>
              <p className="menu__price"> £15.50   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                28 day aged 8 oz rib-eye steak, roasted tomato, watercress, fries, peppercorn sauce

              </p>
              <p className="menu__price"> £26   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                Pan fried gnocchi, spiced tomato sauce, spinach, rocket pesto, crispy shallots (vg

              </p>
              <p className="menu__price"> £12.50   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                Pan roasted sea bass, crushed new potatoes & bacon, samphire, buttered leeks

              </p>
              <p className="menu__price"> £17.50   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                Cumberland sausages, crushed winter roots, savoy cabbage, crispy shallots, gravy

              </p>
              <p className="menu__price"> £14.50   </p>
            </div>

          </div>
        </div>

        <div className="menu__name">
          <h2 className="menu__heading">PUDDINGS</h2>
          <div className="menu__container">

            <div className="menu__meal">
              <p className="menu__title">
                Spiced fruit Bakewell tart, clotted cream
              </p>
              <p className="menu__price"> £7   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                Flourless chocolate & orange brownie, vegan vavilla ice-cream
              </p>
              <p className="menu__price"> £6.5   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                Sticky toffee pudding, clotted cream, caramel sauce
              </p>
              <p className="menu__price"> £6   </p>
            </div>

            <div className="menu__meal">
              <p className="menu__title">
                3 Scoops lemon, mango or raspberry sorbet (vg)
              </p>
              <p className="menu__price"> £6   </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Menu;