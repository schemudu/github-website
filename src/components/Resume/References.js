import React from 'react';
import PropTypes from 'prop-types';

import Vol from './Experience/Vol';

const References = ({ data }) => (
  <div className="references">
    <div className="link-to" id="volunteering" />
    <div className="title">
      <h3>Volunteering</h3>
    </div>
    {data.map((vol) => (
      <Vol
        data={vol}
        key={vol.company}
      />
    ))}
  </div>
);

References.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

References.defaultProps = {
  data: [],
};

export default References;
