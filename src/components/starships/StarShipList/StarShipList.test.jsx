import React from 'react';
import { render, cleanup } from '@testing-library/react';
import StarShipList from './StarShipList';

describe('StarShipList component', () => {
  afterEach(() => cleanup());
  it('renders StarShipList', () => {
    const { asFragment } = render(
      <StarShipList data= {[
        {
          name: 'Star Destroyer',
          model: 'Imperial I-class Star Destroyer',
          url: 'https://swapi.dev/api/starships/3/'
        },
        {
          name: 'Sentinel-class landing craft',
          model: 'Sentinel-class landing craft',
          url: 'https://swapi.dev/api/starships/5/'
        }
      ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
