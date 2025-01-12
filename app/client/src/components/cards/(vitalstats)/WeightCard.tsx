
function WeightCard() {

  const weigth = 61;

  return (
    <div className="h-[100px] w-[100px] bg-[--secondary-background] relative overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-xl">
      <div className="h-[110px] w-[110px] bg-white absolute top-[55px] left-[55px] rounded-full" />
      <div className="relative z-10 h-full w-full flex flex-col items-center p-5 pt-1 space-y-1">
        <h1 className="text-[15px]">Weight</h1>
        <p className="text-[23px]">{weigth}</p>
        <h1 className="text-[18px]">Kg</h1>
      </div>
    </div>
  );
}

export default WeightCard;