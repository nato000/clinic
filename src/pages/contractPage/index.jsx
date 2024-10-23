import "./style.css";
import { translate } from '../../shared/utils/translator'
import React from 'react';
import { useLocation } from 'react-router-dom';

const ContractPage = () => {
  const location = useLocation();

  // Function to get the value of the "contract" parameter from the URL
  const getContractParam = () => {
    const params = new URLSearchParams(location.search);
    return params.get('contract');
  };

  const contractValue = getContractParam();

  // Function to process the string and apply styles based on the presence of asterisks
  const processString = (str) => {
    if (!str) return null;

    // Split the string by newline or line separator characters
    return str.split(/[\n\u2028]/).map((part, index) => {
      // Trim whitespace for consistent processing
      const trimmedPart = part.trim();

      // Check if the line starts and ends with an asterisk
      const isSpecialFormat = trimmedPart.startsWith('*') && trimmedPart.endsWith('*');
      const cleanedPart = isSpecialFormat ? trimmedPart.slice(1, -1) : trimmedPart; // Remove the asterisks if present

      // Return the formatted text with the appropriate styles
      return (
        <div
          key={index}
          style={{
            textAlign: isSpecialFormat ? 'center' : 'left',
            fontWeight: isSpecialFormat ? 'bold' : 'normal',
            marginBottom: '8px', // Optional: add some space between lines
          }}
        >
          {cleanedPart}
        </div>
      );
    });
  };

  // Assuming translate is a function that returns the translated string
  const contractText = contractValue ? processString(translate(`contract.${contractValue}`)) : 'Contract not found';

  return (
    <section className='contract-page-section'>
      <p className="container">{contractText}</p>
    </section>
  )
}

export default ContractPage;
