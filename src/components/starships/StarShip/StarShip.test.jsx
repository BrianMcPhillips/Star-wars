import React from 'react';
import { render, cleanup } from '@testing-library/react';
import StarShip from './StarShip';

describe('StarShip component', () => {
  afterEach(() => cleanup());
  it('renders StarShip', () => {
    const { asFragment } = render(
      <StarShip 
        name="Star Destroyer"
        model="Imperial I-class Star Destroyer"
        url="https://swapi.dev/api/starships/3/"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
