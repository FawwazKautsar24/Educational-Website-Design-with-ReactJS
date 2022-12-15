import React from 'react';
import { useState } from 'react';
import { faq } from '../../dummyData';
import Title from '../common/title/Title';

const Faq = () => {
    const [click, setClick] = useState(false);

    const toggle = (index) => {
        if(click === index){
            // console.log(`Tutup. ${click} ${index}`);
            return setClick(null);
        }
        // console.log(`Buka. ${click} ${index}`);
        setClick(index);
    }
    
    return (
        <>
            <Title subtitle="FAQS" title="Frequently Ask Questions" />
            <section className="faq">
                <div className="container">
                    {faq.map((val, index) => {
                        return (
                            <div className="box" key={index}>
                                <button className="accordion" onClick={() => toggle(index)} >
                                    <h2>{val.title}</h2>
                                    <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                                </button>
                                {click === index && 
                                    <div className="text">
                                        <p>{val.desc}</p>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Faq;
