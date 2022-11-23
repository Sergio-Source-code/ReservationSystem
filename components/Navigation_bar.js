// File Description: This file is for your navigation bar.
import { render } from "react-dom";
import Link from 'next/link'

// Packages to Import:

// Main Function Component:
export default function NavigationBar() {
    // Component Variables:
    const username = null;

    return (
        <nav id = "navigation_bar">
            <ul>
                <li>
                    <Link href = "#">
                        <button> Tejun </button>
                    </Link>
                </li>
                <li>
                    <Link href = "/reserve_a_seat">
                        <button> Reserve a Seat </button>
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