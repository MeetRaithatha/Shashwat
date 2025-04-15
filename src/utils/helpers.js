export const formatCurrency = (amount) => {
  return `$${amount.toLocaleString()}`;
};

export const formatSqFt = (sqft) => {
  return `${sqft.toLocaleString()} sq ft`;
};

export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
};

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

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

export const calculateCarbonFootprint = (inputs) => {
  const { homeSize, energySource, transportation, diet } = inputs;
  let footprint = 0;

  if (energySource === 'renewable') {
    footprint += homeSize * 0.5;
  } else if (energySource === 'mixed') {
    footprint += homeSize * 2;
  } else {
    footprint += homeSize * 4;
  }

  footprint += transportation * 0.2;

  if (diet === 'vegetarian') {
    footprint += 500;
  } else if (diet === 'vegan') {
    footprint += 300;
  } else {
    footprint += 1000;
  }

  return Math.round(footprint);
};
