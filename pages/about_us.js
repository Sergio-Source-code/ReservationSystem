// File Description: This page is the about-us content of our restuarant.

// Packages to Import:
import Image from 'next/image';

// About Us Component
export default function AboutUs() {
    return (
        <main className = "main_class about_us_page">
            <div id = "about_us_and_award_strip_wrapper">
                <div id = "about_us">
                    <p> The Royal Kitchen is all about trying new things and mixing unique blends.
                        We are formed by a group of three chefs with unique cultural backgrounds and heavily influenced by the cajun cooking in the Gulf areas, and particularly in New Orleans.
                        We have gave birth to popular world reknown dishes, such as the Vietnamese BoPoy. 
                        We have 7 chains located in Houston and it&apos;s surrounding areas: League City, Katy, Galveston, Sugarland, Atascocita, Cypress, and Houston Midtown.
                        Our restuarant is also awarded 2 Michelin stars and have won many accolades, such as the James Beard Award, the Eater&apos;s Award 2022, and the Rising Star Award. We&apos;ve 
                        also been featured on many news articles, such as Traveler, TIMES Magazine, the Houston Chronicle, and New York Times.
                    </p>
                </div>
                <div id = "award_strip">
                    <Image src = "/img/Award Strip.png" layout='fill' objectFit='contain' />
                </div>
                <div id = "closing_brackets" />
            </div>
        </main>
    );
  }