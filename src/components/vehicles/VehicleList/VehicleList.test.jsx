import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VehicleList from './VehicleList';

describe('VehicleList component', () => {
  afterEach(() => cleanup());
  it('renders VehicleList', () => {
    const { asFragment } = render(
      <VehicleList data= {[
        {
          name: 'Speeder',
          model: 'Imperial I-class Speeder',
          url: 'https://swapi.dev/api/vehicle/3/'
        },
        {
          name: 'Sentinel-class landing craft',
          model: 'Sentinel-class landing craft',
          url: 'https://swapi.dev/api/vehicle/5/'
        }
      ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
