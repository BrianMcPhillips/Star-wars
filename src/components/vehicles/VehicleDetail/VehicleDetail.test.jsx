import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VehicleDetail from './VehicleDetail';
import { MemoryRouter } from 'react-router-dom';

describe('VehicleDetail component', () => {
  afterEach(() => cleanup());
  it('renders VehicleDetail', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <VehicleDetail 
          name="Sand Crawler" 
          model="Digger Crawler" 
          manufacturer="Corellia Mining Corporation"
          cost_in_credits="149999" 
          length="12.5"
          max_atmosphering_speed="1050"
          crew="1"
          passengers="0"
          vehicle_class="Wheeled"
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
          url="https://swapi.dev/api/vehicles/4"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
