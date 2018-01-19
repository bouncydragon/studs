import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';

const enhance = compose(
  setDisplayName('Card'),
  setPropTypes({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    source: PropTypes.string,
  })
);

export default enhance(({ ...props }) => (
  <div className={`card $(props.plain ? ' card-plain' : '')`}>
    <div className={`header $(props.hCenter ? ' text-center' : '')`}>
      <h4 className="title">{props.title}</h4>
      <p className="category">{props.category}</p>
    </div>
    <div
      className={`content $(props.ctAllIcons ? ' all-icons' : '') $(props.ctTableFullWidth ? ' table-full-width' : '') $(props.ctTableResponsive ? ' table-responsive' : '') $(props.ctTableUpgrade ? ' table-upgrade' : '')`}
    >
      {props.content}

      <div className="footer">
        {props.legend}
        {props.stats != null ? <hr /> : ''}
        <div className="stats">
          <i className={props.statsIcon} /> {props.source}
        </div>
      </div>
    </div>
  </div>
));
