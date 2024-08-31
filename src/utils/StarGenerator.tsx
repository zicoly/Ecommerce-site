import React from 'react';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { StarGeneratorProps } from './types';

const StarGenerator: React.FC<StarGeneratorProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <IoMdStar key={`full-${i}`} className="text-[#ffac53]" />
        ))}
      {hasHalfStar && <IoMdStarHalf className="text-[#ffac53]" />}
      {Array(remainingStars)
        .fill(0)
        .map((_, i) => (
          <IoMdStarOutline key={`empty-${i}`} className="text-[#ffac53]" />
        ))}
    </div>
  );
};

export default StarGenerator;
