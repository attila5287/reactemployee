import SearchResultContainer from '../search/SearchResultContainer';
import React from 'react';
import {Animated} from 'react-animated-css';

function Search() {
  return (
    <div className='mini'>
      <Animated animationIn="bounceInLeft" isVisible={true}>
        <h1 className="bg-secondary p-0 rounded text-secondary text-center">
          <i className="fab fa-searchengin mx-2"></i>
          <i>
            Search
          </i>
        </h1>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animationInDelay={1000} isVisible={ true }>
        <div className="px-4 text-muted">
          <h4 className="fas fa-cog fa-pulse mx-0 text-secondary"></h4>
          <h6 className="fas fa-cog fa-spin mx-0 text-secondary"></h6>
          <i>
            Enter a dog breed name in search form below,
            <span className="fas fa-paw text-secondary mx-1">
              puggle
            </span>
            is default selection, here are some suggestions:
            <i className="fas fa-search-minus mx-1"></i>dingo
            <i className="fas fa-search-minus mx-1"></i>
            african
            <i className="fas fa-search-minus mx-1"></i>
            eskimo
          </i>
        </div>
      </Animated>

      <SearchResultContainer/>
    </div>
  );
}

export default Search;
