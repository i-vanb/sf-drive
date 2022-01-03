import React from "react"
// import "../styles/Footer.css"
import vk from "../img/sm_icons/1.svg"
import inst from "../img/sm_icons/2.svg"
import fb from "../img/sm_icons/3.svg"
import Image from 'next/image'


function Footer() {
    return (
        <footer className="footer">
            <p className="footer__rights">© SkillDrive Inc. 2020</p>
            <div className="footer__socials">
                <a href="" target="_blank" rel="nofollow"><Image src={vk} alt="vkontakte link"/></a>
                <a href="" target="_blank" rel="nofollow"><Image src={inst} alt="instagram link"/></a>
                <a href="" target="_blank" rel="nofollow"><Image src={fb} alt="facebook link"/></a>
            </div>
        </footer>
    )
}

export default Footer;
