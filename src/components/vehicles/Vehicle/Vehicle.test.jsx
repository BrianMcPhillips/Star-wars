import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Vehicle from './Vehicle';


describe('Vehicle component', () => {
  afterEach(() => cleanup());
  it('renders Vehicle', () => {
    const { asFragment } = render(
      <Vehicle 
        name="Sand Crawler"
        model="Digger Crawler"
        url="https://swapi.dev/api/vehicles/4/"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
