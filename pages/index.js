// File description: This is the main/homepage file

// Packages to Import:
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

// Home Component:
export default function Home() {
  // Local Variables:
  const specialTodayPath = "/img/Today's Special.jpg";

  return (
    <main className="main_class homepage">
      <section className='homepage_banner'>
        <div className='centered_text'>
          <h1> WELCOME TO THE ROYAL KITCHEN </h1>
          <h3> THE MEAL OF KINGS </h3>
        </div>
      </section>
      <section className='specials'>
        <h2> Today's Special(s): 50% Off Pad Thai Nachos </h2> 
      </section>
      <section className='menu_highlights'>
        <h1> Menu Highlights </h1>
        <div className='menu_highlights_grid'>
          <div className='menu_highlights_grid_item grid_area_one'>
            <h2> Appteizers </h2> 
          </div>
          <div className='menu_highlights_grid_item grid_area_two'>
            <h2> Beverages </h2> 
          </div>
          <div className='menu_highlights_grid_item grid_area_three'>
            <h2> Entreés </h2> 
          </div>
          <div className='menu_highlights_grid_item grid_area_four'>
            <h2> Desserts </h2> 
          </div>
        </div>
      </section>
    </main>
  )
}
