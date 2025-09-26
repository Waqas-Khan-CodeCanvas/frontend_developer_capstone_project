import React from 'react';
import DoctorCard from './DoctorCard';
import "./DisplayDoctors.css"

export const DoctorFiles = [
    { image: "https://cdn.pixabay.com/photo/2023/07/03/13/13/ai-generated-8104159_1280.jpg", name: "Dr. Laura Kirk", specialty: "Ear-Nose-Throat Specialist", experience: 12, rating: 4.7 },
    { image: "https://cdn.pixabay.com/photo/2023/12/15/18/32/ai-generated-8451270_960_720.png", name: "Dr. Patrick Turner", specialty: "Dentist", experience: 15, rating: 4.5 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578393_960_720.png", name: "Dr. Grace Evans", specialty: "Ayurveda", experience: 10, rating: 4.8 },
    { image: "https://cdn.pixabay.com/photo/2024/03/29/03/30/ai-generated-8662131_960_720.png", name: "Dr. Jean Hill", specialty: "Gynecologist/Obstetrician", experience: 11, rating: 4.2 },
    { image: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_1280.png", name: "Dr. Steven White", specialty: "Dermatologist", experience: 14, rating: 4.6 },
    { image: "https://cdn.pixabay.com/photo/2024/08/13/11/57/ai-generated-8965819_1280.png", name: "Dr. Michelle Howard", specialty: "Ear-Nose-Throat Specialist", experience: 10, rating: 4.5 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578389_960_720.png", name: "Dr. Ben Hall", specialty: "Dentist", experience: 15, rating: 4.6 },
    { image: "https://cdn.pixabay.com/photo/2023/12/15/18/40/ai-generated-8451277_960_720.png", name: "Dr. Brian Hughes", specialty: "Ayurveda", experience: 10, rating: 4.7 },
    { image: "https://cdn.pixabay.com/photo/2023/07/03/13/13/ai-generated-8104159_1280.jpg", name: "Dr. Sue Smith", specialty: "Homeopath", experience: 10, rating: 4.5 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578391_960_720.png", name: "Dr. Sarah Davis", specialty: "Dentist", experience: 7, rating: 4.9 },
    { image: "https://cdn.pixabay.com/photo/2024/08/13/11/57/ai-generated-8965819_1280.png", name: "Dr. Emily Johnson", specialty: "Homeopath", experience: 8, rating: 4.7 },
    { image: "https://cdn.pixabay.com/photo/2023/12/15/18/32/ai-generated-8451270_960_720.png", name: "Dr. Michael Brown", specialty: "General Physician", experience: 12, rating: 4.6 },
    { image: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_1280.png", name: "Dr. John Doe", specialty: "Homeopath", experience: 15, rating: 4.8 },
    { image: "https://cdn.pixabay.com/photo/2024/03/29/03/30/ai-generated-8662131_960_720.png", name: "Dr. Emma Wright", specialty: "Dermatologist", experience: 13, rating: 4.4 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578389_960_720.png", name: "Dr. Robert Lewis", specialty: "General Physician", experience: 11, rating: 4.7 },
    { image: "https://cdn.pixabay.com/photo/2024/08/13/11/57/ai-generated-8965819_1280.png", name: "Dr. Hannah Reed", specialty: "Gynecologist/Obstetrician", experience: 8, rating: 4.4 },
    { image: "https://cdn.pixabay.com/photo/2023/12/15/18/40/ai-generated-8451277_960_720.png", name: "Dr. James Martinez", specialty: "Ear-Nose-Throat Specialist", experience: 13, rating: 4.5 },
    { image: "https://cdn.pixabay.com/photo/2023/07/03/13/13/ai-generated-8104159_1280.jpg", name: "Dr. Barbara Brown", specialty: "General Physician", experience: 9, rating: 4.6 },
    { image: "https://cdn.pixabay.com/photo/2024/08/13/11/57/ai-generated-8965819_1280.png", name: "Dr. Bailey Meyers", specialty: "Dentist", experience: 7, rating: 4.8 },
    { image: "https://cdn.pixabay.com/photo/2023/07/03/13/13/ai-generated-8104159_1280.jpg", name: "Dr. Rachel Green", specialty: "Gynecologist/Obstetrician", experience: 9, rating: 4.7 }
];


const DisplayDoctors = () => {
  return (
    <div className="doctor_list">
      {DoctorFiles.map((doctor, index) => (
        <DoctorCard
          key={index}
          image={doctor.image}
          name={doctor.name}
          specialty={doctor.specialty}
          experience={doctor.experience}
          rating={doctor.rating}
        />
      ))}
    </div>
  );
};

export default DisplayDoctors;
