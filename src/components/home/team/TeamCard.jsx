import React from 'react';
import { team } from '../../../dummyData';

const TeamCard = () => {
    return (
        <>
            {team.map((val) => {
                return (
                    <div className="items shadow">
                        <div className="img">
                            <img src={val.cover} alt="Our Team Image" />
                            <div className="overlay">
                                <i className="fab fa-facebook-f icon"></i>
                                <i className="fab fa-instagram icon"></i>
                                <i className="fab fa-twitter icon"></i>
                                <i className="fab fa-tiktok icon"></i>
                            </div>
                        </div>
                        <div className="details">
                            <h2>{val.name}</h2>
                            <p>{val.work}</p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default TeamCard;
