import React from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: {value, measurementUnit: unit}, image } } = this.props;
    return (
      <div className='pokemon'>
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> Average weight: {value} {unit} </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};