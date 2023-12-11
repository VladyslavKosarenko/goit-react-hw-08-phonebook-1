import { nanoid } from 'nanoid';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterInput = nanoid();
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    return dispatch(contactsFilter(filter));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterInput}>
        Find contacts by name:
        <FilterInput
          type="text"
          id={filterInput}
          onChange={event => handleFilterChange(event.target.value)}
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
