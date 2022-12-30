import {  render, screen } from '@testing-library/react';
import React from 'react';
import { Results } from '../Results/Results';


const testData = {
  forecastData: [
    {
      date: '12/01/02',
      temp: '65',
      tempHigh: '65',
      tempLow: '65',
      humid: '65',
      cond: '65',
      condIcon: '',
    },
    {
      date: '12/01/02',
      temp: '65',
      tempHigh: '65',
      tempLow: '65',
      humid: '65',
      cond: '65',
      condIcon: '',
    },
    {
      date: '12/01/02',
      temp: '65',
      tempHigh: '65',
      tempLow: '65',
      humid: '65',
      cond: '65',
      condIcon: '',
    },
    {
      date: '12/01/02',
      temp: '65',
      tempHigh: '65',
      tempLow: '65',
      humid: '65',
      cond: '65',
      condIcon: '',
    },
    {
      date: '12/01/02',
      temp: '65',
      tempHigh: '65',
      tempLow: '65',
      humid: '65',
      cond: '65',
      condIcon: '',
    },
    {
      date: '12/01/02',
      temp: '65',
      tempHigh: '65',
      tempLow: '65',
      humid: '65',
      cond: '65',
      condIcon: '',
    },

  ],
  hoursData: [
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
    {
      condition: 'text',
      condIcon: 'text',
      humidity: '4',
      temp: '65',
      time: '65',
      windSpd: '65',
    },
  ]
}

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
describe('renders Results', () => {
  it('should render', () => {
    render(
       <Results forecastData={testData.forecastData} city={'Seattle'} hours={testData.hoursData} />
     );
    const currentText = screen.getByText('Currently');
    const weeklyText = screen.getByText('Weekly Forecast');
    const hourlyText = screen.getByText('24 Hour Forecast');
    expect(currentText).toBeTruthy();
    expect(weeklyText).toBeTruthy();
    expect(hourlyText).toBeTruthy();
  });
});
