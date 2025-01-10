import React from 'react';

function HydrationCard() {
  const hydrationLevel = 856;

  return (
    <div className="relative h-40 w-40">
      {/* Background Star Image */}
      <img 
        src="/icons/Star.svg" 
        alt="Star background" 
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center space-y-2 p-4">
        {/* Water Label */}
        <div className="flex items-end space-x-2">
          <img 
            src="/icons/Drop.svg" 
            alt="Water drop" 
            className="scale-[0.7]"
          />
          <h1 className="text-[18px]">Water</h1>
        </div>

        {/* Hydration Amount */}
        <div className="flex flex-col items-center -space-y-1">
          <p className="text-[22px]">{hydrationLevel}</p>
          <h1 className="text-[12px]">ml</h1>
        </div>

        {/* Date Label */}
        <h2 className="text-sm">Today</h2>
      </div>
    </div>
  );
}

export default HydrationCard;