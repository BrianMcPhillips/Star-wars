import React from 'react';
import { render, cleanup } from '@testing-library/react';
import StarShipDetail from './StarShipDetail';
import { MemoryRouter } from 'react-router-dom';

describe('StarShipDetail component', () => {
  afterEach(() => cleanup());
  it('renders StarShipDetail', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <StarShipDetail 
          name="X-wing" 
          model="T-65 X-wing" 
          manufacturer="Incom Corporation"
          const_in_credits="149999" 
          length="12.5"
          max_atmosphering_speed="1050"
          crew="1"
          passengers="0"
          hyperdrive_rating="1.0"
          starship_class="Starfighter"
          pilots= {[
            'https://swapi.dev/api/people/1/', 
            'https://swapi.dev/api/people/2/', 
            'https://swapi.dev/api/people/3/', 
            'https://swapi.dev/api/people/4/', 
            'https://swapi.dev/api/people/5/'
          ]}
          films= {[
            'https://swapi.dev/api/films/1/', 
            'https://swapi.dev/api/films/2/', 
            'https://swapi.dev/api/films/3/'
          ]} 
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
