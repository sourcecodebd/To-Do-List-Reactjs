import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid footer row row-cols-lg-3 row-cols-md-2 row-cols-12 d-flex justify-content-center mx-auto py-3 gy-5 mt-4">
            <div>
                <h4>Contact Us</h4>
                <a href="tel:01869510882"><p>Phone: (+880) 1869510882</p></a>
                <a href="mailto: nafiaiubian17@gmail.com"><p>Email: nafiaiubian17 @gmail.com</p></a>
            </div>
            <div>
                <h4>About Me</h4>
                <p>Nafi Mahmud</p>
                <p>BSc in CSE</p>
                <p>Front-End Web Developer</p>
                <a href="https://sourcecodebd.github.io/nafi.com"><p>Website: nafi.com</p></a>
            </div>
            <div>
                <h4>Organization</h4>
                <p>American Internation Univerisity, Bangladesh</p>
                <a href="https://www.aiub.edu"><p>www.aiub.edu</p></a>
            </div>
        </footer>
    );
};

export default Footer;