// File Description: This file is for your navigation bar.

// Packages to Import:
import { render } from "react-dom";
import Link from 'next/link'
import Image from "next/image";
import styles from "../styles/NavigationBar.module.css"

// Main Function Component:
export default function NavigationBar() {
    // Component Variables:
    const username = null;

    return (
        <nav id = "navigation_bar">
            <ul>
                <li>
                    <Link href = "#">
                        <button> The Royal Kitchen </button>
                    </Link>
                </li>

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
                    <Link href = "/careers_at_resturant_name">
                        <button> Careers </button>
                    </Link>
                </li>
                
            </ul>
        </nav>
    );
}
