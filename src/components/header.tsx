import { useEffect, useRef, useState } from "react";
import './header.css'
import Logo from '../assets/logo.png'
import Dropdown from "./dropdown";


function Header() {
    const [isSticky, setSticky] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        window.onscroll = function () { myFunction() };

        const sticky = headerRef.current!.offsetTop;

        function myFunction() {
            if (window.scrollY > sticky) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
    }, [])

    return (
        <div ref={headerRef} className={"header " + (isSticky ? "sticky" : "")} id="myHeader">
            <div className="header-left" onClick={() => {
                window.location.href = "/"
            }}>
                <img src={Logo} alt="" className="Logo" />
                <h2>Campus Connect</h2>
            </div>
            <div className="header-right">

                <Dropdown title="Features" onClick={() => {
                    window.location.href = "/#features"
                    window.scrollTo({
                        top: window.scrollY - 100,
                        behavior: "instant"
                    });
                }} links={[
                    {
                        title: "Activities Management",
                        onClick: () => {
                            window.location.href = "/#activities"
                            window.scrollTo({
                                top: window.scrollY - 100,
                                behavior: "instant"
                            });
                        }
                    },
                    {
                        title: "Ridesharing",
                        onClick: () => {
                            window.location.href = "/#ridesharing"
                            //scroll up just a bit
                            window.scrollTo({
                                top: window.scrollY - 100,
                                behavior: "instant"
                            });
                        }
                    },
                    {
                        title: "Opportunities",
                        onClick: () => {
                            window.location.href = "/#opportunities"
                            window.scrollTo({
                                top: window.scrollY - 100,
                                behavior: "instant"
                            });
                        }
                    }

                ]} />
                <Dropdown title="Contact" onClick={() => {
                    window.location.href = "/#contact"

                }} links={[]}
                />
                <Dropdown title="Dashboard" onClick={() => {
                    window.location.href = "https://dashboard.campusconnects.net"
                }} links={[]} />


            </div>

        </div>
    )
}

export default Header