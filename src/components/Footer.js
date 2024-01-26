import React from 'react'
import '../style.css';

const Footer = () => {
    return (
        <section id="footer">
            <div>
                <h4>Ciara Attong</h4>
                <ul class="footer-items">
                    <li><a href="bio.html">Bio</a></li>
                    <li><a href="#services">Books</a></li>
                    <li><a href="#gallery">Extras</a></li>
                    <li><a href="#contact">Contact</a></li>
                   
                </ul>
                <div class="footer-socials">
                    <ul>
                        <li>
                            <a href='' target="_blank"><i class="fa-brands fa-twitter fa-lg"></i></a>
                        </li>
                        <li>
                            <a href='' target="_blank"><i class="fa-brands fa-instagram fa-lg"></i></a>
                        </li>
                        <li>
                            <a href='https://www.tiktok.com/@thesemicircleacademy' target="_blank"><i class="fa-brands fa-amazon fa-lg"></i></a>
                        </li>
                        <li>
                            <a href='' target="_blank"><i class="fa-brands fa-discord fa-md"></i></a>
                        </li>
                    </ul>
                </div>

                <p>@2023 Ciara Attong. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer