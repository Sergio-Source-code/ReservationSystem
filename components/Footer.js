// File Description: This file is for your navigation bar.

// Packages to Import:
import { render } from "react-dom";
import Link from 'next/link';
import Image from "next/image";

// Main Function Component:
export default function Footer() {
    // Local Variables:
    const current_year = new Date().getFullYear(); // Creating date object to get year.

    return (
        <footer>
            &copy; {current_year} - {current_year + 1} The Royal Kitchen
        </footer>
    );
}