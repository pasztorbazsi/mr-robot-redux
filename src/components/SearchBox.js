import React from 'react';

const SearchBox = ({searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--near-white bg-moon-gray'
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
    />
    </div>
    
  );
}

export default SearchBox;