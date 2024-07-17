import styled from 'styled-components';

/* Card container with box shape and shadow */
export const CardContainer = styled.div`
  background: Cyan;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Student info section with margin */
export const StudentInfo = styled.div`
  margin: 10px 0;
  h2 {
    margin: 0;
  }
`;

/* Toggle button styling with transition effect */
export const ToggleButton = styled.button`
  background-color: #007bff;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

/* Eye icon styling */
export const EyeIcon = styled.img`
  width: 50px;
  height: 50px;
`;

/* Additional content section with fade-in animation */
export const AdditionalContent = styled.div`
  margin-top: 15px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
