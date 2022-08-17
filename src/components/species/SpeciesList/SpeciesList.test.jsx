import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SpeciesList from './SpeciesList';

describe('SpeciesList component', () => {
  afterEach(() => cleanup());
  it('renders SpeciesList', () => {
    const { asFragment } = render(
      <SpeciesList data={[
        {
          name: 'Human',
          url: 'https://swapi.dev/api/species/1/'
        },
        {
          name: 'Human 2',
          url: 'https://swapi.dev/api/species/12/'
        }
      ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
