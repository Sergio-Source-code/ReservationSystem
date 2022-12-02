// File description: This is the page where we would contain our menu.

// Packages to Import:
import Image from 'next/image';

// Menu Component:
export default function OurMenu() {
    return (
        <main className = "main_class menu_page">
            <h1> Our Menu </h1>
            <div id = "menu">
                <div id = "appetizers">
                    <h2> Appetizers: </h2>
                    <ol>
                        <li>
                            Crumb&apos;s Calamari
                        </li>
                        <li>
                            Creole Fried Pickles
                        </li>
                        <li>
                            Creole Sausage Balls
                        </li>
                        <li>
                            Cajun Flavored Nachoes
                        </li>
                        <li>
                            Tex Mex Fried Gator Bites
                        </li>
                        <li>
                            Oysters
                        </li>
                    </ol>
                </div>
                <div id = "image_one_right_container">
                    <Image src = '/img/Menu_Pictures/Gator_Bites_2.png' layout = 'fill' objectFit='contain'/>
                </div>
                <div id = "entrees">
                    <h2> Entrées </h2>
                    <ol>
                        <li>
                            Vietnamese PoBoy
                        </li>
                        <li>
                            Fried Chicekn Lasooni
                        </li>
                        <li>
                            20 lbs Viet - Cajun Crawfish
                        </li>
                        <li>
                            Lamb Masala
                        </li>
                        <li>
                            Gumbo Wrapped Tacos with Fried Shrimp Skewers
                        </li>
                        <li>
                            Crawfish Effoute
                        </li>
                        <li>
                            Jamabalaya
                        </li>
                        <li>
                            American Red Snapper and Crab Stuffed Tacos
                        </li>
                    </ol>
                </div>
                <div id = "image_two_left_container">
                    <Image src = '/img/Menu_Pictures/Banh_Mi_Po_Boy.png' layout = 'fill' objectFit = 'contain' />
                </div>
                <div id = "sides">
                    <h2> Sides </h2>
                    <ol>
                        <li>
                            Tandoori Naan
                        </li>
                        <li>
                            Cajun-Mexican Chicken Queso
                        </li>
                        <li>
                            Curried Seafood Combo
                        </li>
                        <li>
                            Signature Tejun Crumb Fries
                        </li>
                    </ol>
                </div>
                <div id = "image_three_right_container">
                    <Image src = '/img/Menu_Pictures/Fries.jpg' layout = 'fill' objectFit = 'contain'/>
                </div>
                <div id = "desserts">
                    <h2> Desserts: </h2> 
                    <ol>
                        <li>
                            Southern Crab Beignets
                        </li>
                        <li>
                            Crumb&apos;s Banana Foster
                        </li>
                        <li>
                            Fried Icecream
                        </li>
                        <li>
                            Crème Brûlée and Icecream Scoop
                        </li>
                    </ol>
                </div>
                <div id = "image_four_left_container">
                    <Image src = '/img/Menu_Pictures/Creme_Brulee.jpg' layout = 'fill' objectFit = 'contain'/>
                </div>
            </div>
        </main>
    );
  }