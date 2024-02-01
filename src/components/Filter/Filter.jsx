// Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFilter } from '../contactsSlice';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1em;
`;

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <label>
        Filter contacts by name:
        <Input type="text" value={value} onChange={handleChange} />
      </label>
    </FilterContainer>
  );
};

export default Filter;
