import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ updater, submitter }) {
  return (
    <p>
      <input id="inputBox" type="text" onChange={updater} />
      <button type="button" onClick={submitter}>
        추가
      </button>
    </p>
  );
}

Input.propTypes = {
  updater: PropTypes.func.isRequired,
  submitter: PropTypes.func.isRequired,
};
