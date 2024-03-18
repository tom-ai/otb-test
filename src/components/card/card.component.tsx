import { useState } from 'react';
import { Hotel, Booking } from '../../types';

import BookingInformation from './bookingInformation/bookingInformation.component';
import Button from './button/button.component';

type CardProps = {
  hotel: Hotel;
  booking: Booking;
};

import hotelImage1 from '../../assets/hotel-image-1.png';
import hotelImage2 from '../../assets/hotel-image-2.png';
import hotelImage3 from '../../assets/hotel-image-3.png';

const hotelImages: { [key: string]: string } = {
  'Iberostar Grand Salome': hotelImage1,
  'Hotel de Crillon': hotelImage2,
  'Hotel Danieli': hotelImage3,
};

export default function Card({ hotel, booking }: CardProps) {
  const [overviewHidden, setOverviewHidden] = useState(true);

  const hotelImage = hotelImages[hotel.hotelName];

  return (
    <article>
      <img src={hotelImage} alt={hotel.imageAltText} />
      <h2 className="text-3xl">{hotel.hotelName}</h2>
      <p>{hotel.hotelLocation}</p>
      <ul>
        {[...Array(hotel.starRating)].map((_star, i) => (
          <li key={i}>
            <svg
              data-testid="star-rating"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="24px"
              height="24px"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </li>
        ))}
      </ul>
      <BookingInformation booking={booking} />
      <Button booking={booking} />
      <button onClick={() => setOverviewHidden((prev) => !prev)}>
        <strong>Read {overviewHidden ? 'more' : 'less'}</strong> about this
        hotel
      </button>
      <div hidden={overviewHidden}>
        <h3>Overview</h3>
        <p>{hotel.overview}</p>
      </div>
    </article>
  );
}
