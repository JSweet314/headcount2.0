import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import CompareContainer from '../CompareContainer/CompareContainer.js';
import './CardsContainer.css';

const CardsContainer = (
  { districts, searchValue, selectLocation, selectedLocations }
) => {
  let comparedAverage;

  if (selectedLocations.length > 1) {
    const [districtA, districtB] = selectedLocations;

    comparedAverage = districts.compareDistrictAverages(
      districtA.location, districtB.location
    );    
  }
  const cards = districts.findAllMatches(searchValue)
    .map((district, index) => {
      return (
        <Card {...district}
          key={index}
          selectLocation={selectLocation}
          selectedLocations={selectedLocations}
        />
      );
    });

  return (
    <div className='CardsContainer'>
      <CompareContainer 
        searchValue={searchValue} 
        selectLocation={selectLocation}
        selectedLocations={selectedLocations}
        comparedAverage={comparedAverage}
      />
      {cards}
    </div>
  );
};

CardsContainer.propTypes = { 
  districts: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired,
  selectedLocations: PropTypes.array.isRequired
};

export default CardsContainer;