import { useState } from 'react';
import { 
  CardContainer,
  StudentInfo,
  ToggleButton,
  EyeIcon,
  AdditionalContent,
} from './Fun';
import photo from './eye.png'; // Replace with your photo

function StudentCard() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CardContainer>
      { <img src={photo} alt="Profile" /> }
      <StudentInfo>
        <h2>Vijay R</h2>
        <p>Registration Number: 212221230121</p>
      </StudentInfo>
      <ToggleButton onClick={toggleVisibility}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </ToggleButton>
      {isVisible && (
        <AdditionalContent>
          <p>Good in Communication
            
            Front End developer
          </p>
        </AdditionalContent>
      )}
    </CardContainer>
  );
};

export default StudentCard;
