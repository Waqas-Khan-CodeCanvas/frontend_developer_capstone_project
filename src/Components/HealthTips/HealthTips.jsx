import React from 'react';
import './HealthTips.css'

function HealthTips() {

    return(
        <div className='health-tips-container'>
            <h1>Health Tips and Guidance</h1>
            <br />
            <div className='tip-box'>
                <h3 className='HT-h3' >Stay Hydrated</h3>
                <p className='HT-p'>Drink plenty of water throughout the day to keep your body functioning optimally. 
                Aim for at least 8 glasses (about 2 liters) daily, adjusting for activity level and climate.</p>
            </div>
            <br />

            <div className='tip-box'>
                <h3 className='HT-h3'>Eat a Balanced Diet</h3>
                <p className='HT-p'>Incorporate a variety of fruits, vegetables, lean proteins, and whole grains into your meals. 
                Limiting processed foods and sugars can also improve overall health.</p>
            </div>
            <br />

            <div className='tip-box'>
                <h3 className='HT-h3'>Regular Exercise</h3>
                <p className='HT-p'>Engage in at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each 
                week. Incorporate strength training exercises at least twice a week.</p>
            </div>
            <br />

            <div className='tip-box'>
                <h3 className='HT-h3'>Get Adequate Sleep</h3>
                <p className='HT-p'>Aim for 7-9 hours of quality sleep each night. Good sleep hygiene includes establishing a consistent 
                sleep schedule and creating a restful environment.</p>
            </div>
            <br />

            <div className='tip-box'>
                <h3 className='HT-h3'>Manage Stress</h3>
                <p className='HT-p'>Practice stress-relief techniques such as mindfulness, meditation, yoga, or deep-breathing exercises. 
                Balancing work, leisure, and rest helps maintain mental and emotional health.</p>
            </div>
        </div>
    )
}

export default HealthTips;