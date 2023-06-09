import React from 'react';

import download from '../../assets/images/download.png';
import { downloadImage } from '.';

const Card = ({ _id, name, prompt, photo, date }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    {photo ? (
      <img
        className="w-auto h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
    ) : (
      <></>
    )}
    <div className="flex flex-col max-h-[94.5%] relative bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">
        Ghi chú: {prompt}
      </p>
      <div>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-white text-sm">{name}</p>
          </div>

          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
        <p className="text-white text-sm mt-5">{date}</p>
      </div>
    </div>
  </div>
);

export default Card;
