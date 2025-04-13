/**
 * Format currency with dollar sign and commas
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return `$${amount.toLocaleString()}`;
};

/**
 * Get readable square footage
 * @param {number} sqft - Square footage
 * @returns {string} Formatted square footage
 */
export const formatSqFt = (sqft) => {
  return `${sqft.toLocaleString()} sq ft`;
};

/**
 * Format phone number in (XXX) XXX-XXXX format
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - DOM element to check
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get available locations
 * @returns {Array} Array of location objects
 */
export const getAvailableLocations = () => {
  return [
    { code: 'NA', name: 'North America' },
    { code: 'EU', name: 'Europe' },
    { code: 'AS', name: 'Asia' },
    { code: 'SA', name: 'South America' },
    { code: 'AF', name: 'Africa' },
    { code: 'OC', name: 'Oceania' }
  ];
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Calculate carbon footprint based on user inputs
 * @param {Object} inputs - User input values
 * @returns {number} Estimated carbon footprint in kg CO₂
 */
export const calculateCarbonFootprint = (inputs) => {
  const { homeSize, energySource, transportation, diet } = inputs;
  let footprint = 0;
  
  // Home energy calculation
  if (energySource === 'renewable') {
    footprint += homeSize * 0.5;
  } else if (energySource === 'mixed') {
    footprint += homeSize * 2;
  } else {
    footprint += homeSize * 4;
  }
  
  // Transportation calculation
  footprint += transportation * 0.2;
  
  // Diet calculation
  if (diet === 'vegetarian') {
    footprint += 500;
  } else if (diet === 'vegan') {
    footprint += 300;
  } else {
    footprint += 1000;
  }
  
  return Math.round(footprint);
};