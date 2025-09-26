import React, { useState } from "react";
import './SelfCheckup.css';

function SelfCheckup() {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleParagraph = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="self-checkup-container">

      <div className="self-checkup-one">
        <div>
          <img src="/frontend_developer_capstone_project/self-health-checkup-five.webp"
               className="self-checkup-img-one" alt=" bottles of vitamins" />
        </div>
        <p className="SC-p" >Performing self-health checkups is a vital practice that allows individuals to take control 
           of their well-being. By regularly assessing different aspects of your physical and mental health, 
           you can spot potential issues early and make informed decisions about seeking professional 
           medical advice. A thorough self-health checkup may include monitoring vital signs such as blood 
           pressure, heart rate, and body temperature, as well as evaluating factors like weight, exercise,
           and sleep patterns. Additionally, being mindful of your emotional state, stress levels, 
           and overall mood can help identify signs of mental health concerns. Regularly engaging in 
           self-health checkups not only encourages a proactive approach to personal health care but also 
           fosters a deeper understanding of one's body, leading to a more balanced and healthier lifestyle.</p>
      </div>

      <div className="self-checkup-two">
            <div><img src="/frontend_developer_capstone_project/self-health-checkup-one.webp"
                className="self-checkup-img-two" alt=" bottles of vitamins" />
            </div>

        <div>
            <h3 className="SC-h3">Self Checkup Guide</h3>
            <p className="SC-p">
          Performing regular self-health checkups is an essential practice for maintaining optimal well-being. 
          By frequently evaluating various aspects of your physical and mental health, you can identify potential 
          issues early and take proactive steps to address them. A comprehensive self-checkup involves monitoring
          vital signs such as blood pressure, heart rate, and body temperature, as well as tracking changes in
          weight, exercise habits, and sleep patterns. Paying attention to your diet and ensuring you are 
          getting adequate nutrition also plays a crucial role in your overall health. Regularly assessing 
          these factors can help you detect abnormalities or concerning trends that may require medical attention. 
          {isRevealed ? (
            <>
              In addition to physical health assessments, it's important to be mindful of your emotional
              state and mental well-being. Regularly reflecting on your mood, stress levels, and overall mental
              health can help you recognize early warning signs of issues like anxiety or depression. This 
              awareness can guide you in seeking timely professional support and making lifestyle adjustments 
              to improve your mental health. Practicing mindfulness, engaging in relaxation techniques, and 
              maintaining a strong social support network are valuable strategies to enhance your mental and 
              emotional resilience. Self-health checkups also include observing any changes in your body, such 
              as new or unusual symptoms. Keeping an eye on skin changes, moles, lumps, and other physical 
              anomalies can provide early detection of potential health issues. Women's health checkups may 
              involve performing regular self-breast exams, while men might focus on testicular health. Being 
              attentive to your body means you can promptly address any concerns with a healthcare professional, 
              leading to early intervention and better outcomes. Engaging in self-health checkups not only 
              promotes a proactive approach to personal healthcare but also helps you gain a deeper understanding
              of your body. This awareness fosters a balanced and healthier lifestyle, empowering you to make 
              informed decisions and take control of your health journey. By prioritizing regular self-checkups,
              you can ensure a holistic approach to maintaining your overall wellness. Implementing a structured
              routine for self-checkups can lead to better health management and a greater sense of empowerment
              over your health. Remember, self-health checkups are not a substitute for professional medical
              advice. They serve as a complementary practice to scheduled medical checkups and consultations. 
              Ensuring you have a clear understanding of when and how to conduct self-checks is important, 
              and seeking guidance from healthcare professionals can help you establish an effective 
              self-checkup routine. Being educated and vigilant about your health enables you to live a more
              fulfilling and healthier life.
            </>
          ) : (
            '...'
          )}
        </p>
        <button className="self-checkup-button" onClick={toggleParagraph}>
          {isRevealed ? 'Hide' : 'Read more'}
        </button>
        </div>
      </div>
    </div>
  );
}

export default SelfCheckup;
