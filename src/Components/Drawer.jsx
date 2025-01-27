import { useRouter } from 'next/navigation';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import the correct Link from react-scroll

function Drawer({ drawerClicked, setDrawerClicked }) {
    const router = useRouter();

    const handleClick = (scrollTo) => {
        if (window.location.pathname === '/') {
            // If we're on the homepage, scroll to the section
            document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Otherwise, route to the homepage
            router.push('/');
        }
        setDrawerClicked(false); // Close the drawer after clicking
    };

    if (drawerClicked) {
        return (
            <div className="text-primary text-4xl font-bold font-serif py-10 flex flex-col text-center justify-around h-full">
                <button>
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        onClick={() => handleClick('home')}
                    >
                        Home
                    </ScrollLink>
                </button>

                <button>
                    <ScrollLink
                        to="socials"
                        smooth={true}
                        duration={500}
                        onClick={() => handleClick('socials')}
                    >
                        Socials
                    </ScrollLink>
                </button>

                <button>
                    <ScrollLink
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        onClick={() => handleClick('portfolio')}
                    >
                        Portfolio
                    </ScrollLink>
                </button>

                <button>
                    <ScrollLink
                        to="footer"
                        smooth={true}
                        duration={500}
                        onClick={() => handleClick('footer')}
                    >
                        Contact
                    </ScrollLink>
                </button>
            </div>
        );
    }

    return null; // Return null when the drawer is not open
}

export default Drawer;
