// File Description: This file is for your navigation bar.

// Packages to Import:
import { render } from "react-dom";
import Link from 'next/link';
import Image from "next/image";

// Main Function Component:
export default function NavigationBar() {
    // Local Variables:
    const trident_logo_path = "/img/trident-logo.svg"; // Next JS automatically looks in the public folder.

    // UseState Function:

    return (
        <nav id = "navigation_bar">
            <div id = "homepage_navigation">
                <Link href = "/">
                    <div id = "logo_div">
                        <Image height = {50} width = {50}  src = {trident_logo_path} />
                        <button id = "logo_button"> <h1> THE ROYAL KITCHEN </h1> </button>
                    </div>
                </Link>
            </div>
            <div id = "side_navigations">
                <ul>
                    <li>
                        <Link href = "/reserve_a_seat">
                            <button> Reserve a Table </button>                  
                        </Link>
                    </li>
                    <li>
                        <Link href = "/our_menu">
                            <button> Our Menu </button>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/about_us">
                            <button> About Us </button> 
                        </Link>
                    </li>
                    <li>
                        <Link href = "/careers_at_royal_kitchen">
                            <button> Careers </button>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/sign-in">
                            <button id = "sign_in_button"> Sign In </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}