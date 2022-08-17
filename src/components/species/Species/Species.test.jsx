import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Species from './Species';

describe('Species component', () => {
  afterEach(() => cleanup());
  it('renders Species', () => {
    const { asFragment } = render(
      <Species 
        name="Human"
        url="https://swapi.dev/api/species/1/"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
