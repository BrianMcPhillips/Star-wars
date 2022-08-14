import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PlanetList from './PlanetList';


describe('PlanetList component', () => {
  afterEach(() => cleanup());
  it('renders PlanetList', () => {
    const { asFragment } = render(
      <PlanetList data={[
        {
          name: 'Tatooine',
          terrain: 'desert',
          url: 'https://swapi.dev/api/planet/1/'
        },
        {
          name: 'Tatooine dos',
          terrain: 'desert cool',
          url: 'https://swapi.dev/api/planet/151515/'
        }
      ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
