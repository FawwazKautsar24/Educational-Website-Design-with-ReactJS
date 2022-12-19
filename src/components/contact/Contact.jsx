import React from "react";
import Back from '../common/back/Back';
import './contact.css';

const Contact = () => {
    // const map = "https://www.google.com/maps/@-6.8606225,107.5981976,13z";
    const map = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63379.99869931112!2d107.5981976!3d-6.8606225!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1668092516907!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
    
    return (
        <>
            <Back title="Contact Us" />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map} title="Location" ></iframe>
                    </div>

                    <div className="right row">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, explicabo.</p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS: </h4>
                                <p>Dr Setiabudhi No 229, kota Bandung - 40154</p>
                            </div>
                            <div className="box">
                                <h4>EMAIL: </h4>
                                <p>info@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>PHONE: </h4>
                                <p>+123 456 987</p>
                            </div>
                        </div>
                        
                        <form action="">
                            <div className="flexSB">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <input type="email" placeholder="Subject" />
                            <textarea cols="30" rows="10" placeholder="Create a message here ..."></textarea>
                            <button className="primary-btn">SEND MESSAGE</button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
