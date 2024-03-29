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
  'Gran Hotel Miramar': hotelImage1,
  'Palacio de la Marquesa': hotelImage2,
  'Hotel Maria Cristina': hotelImage3,
};

export default function ProductCard({ hotel, booking }: CardProps) {
  const [overviewHidden, setOverviewHidden] = useState(true);

  const hotelImage = hotelImages[hotel.hotelName];

  return (
    <article className="bg-white">
      <div className="relative">
        <div className="grid grid-cols-3">
          <img
            src={hotelImage}
            alt={hotel.imageAltText}
            className="object-cover w-full h-full col-span-2"
          />
          <button
            onClick={() => setOverviewHidden((prev) => !prev)}
            className="text-sm text-blue-900 bg-white px-4 py-2 absolute z-1 bottom-0"
            aria-controls="overview"
            aria-expanded={!overviewHidden}
          >
            <strong>Read {overviewHidden ? 'more' : 'less'}</strong> about this
            hotel
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="14px"
              height="14px"
              className={`inline-block ml-2 fill-blue-900 mb-0.5 ${
                !overviewHidden && 'rotate-90'
              }`}
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>

          <div className="p-4">
            <h2 className="text-md font-bold text-blue-900">
              {hotel.hotelName}
            </h2>
            <p className="text-gray-400 text-sm mb-2">{hotel.hotelLocation}</p>
            <ul className="flex flex-wrap gap-1">
              {[...Array(hotel.starRating)].map((_star, i) => (
                <li key={i}>
                  <svg
                    className="fill-yellow-400"
                    data-testid="star-rating"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="14px"
                    height="14px"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </li>
              ))}
            </ul>
            <BookingInformation booking={booking} />
            <Button booking={booking} />
          </div>
        </div>
      </div>
      <div hidden={overviewHidden} className="px-4 mb-6" id="overview">
        <h3 className="font-bold text-sm my-3 text-blue-900">Overview</h3>
        <p className="text-sm text-gray-700">{hotel.overview}</p>
      </div>
    </article>
  );
}
