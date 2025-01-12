function AIsuggestionCard() {
    const header = "Step goal progress";
    const desc = "Consider taking a walk-you have been sitting for 2 hrs straight you moron";

    return (
        <div className='h-[90%] w-[90%] bg-[--secondary-background] rounded-[50px] rounded-tl-none overflow-hidden relative border-[--primary-background]'>
          
            <div className="absolute h-[100px] w-[100px] bg-white rounded-full left-[-35px] top-[-35px] -z-1"/>
            
           
            <div className='relative space-y-2 w-full flex flex-col items-start p-4 pt-2'>
                <h1 className="text-[22px]">{header}</h1>
                <p className="text-[18px] text-left pl-4">{desc}</p>
            </div>
        </div>
    )
}

export default AIsuggestionCard