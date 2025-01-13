
function WeightCard({weight} : any) {

  return (
    <div className="h-[120px] w-[120px] bg-[--secondary-background] relative overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      <div className="h-[110px] w-[110px] bg-white absolute top-[55px] left-[55px] rounded-full" />
      <div className="relative z-10 h-full w-full flex flex-col items-center space-y-1 justify-between py-3">
        <h1 className="text-[16px]">Weight</h1>
        <p className="text-[28px] line-clamp-1">{weight}</p>
        <h1 className="text-[18px]">Kg</h1>
      </div>
    </div>
  );
}

export default WeightCard;