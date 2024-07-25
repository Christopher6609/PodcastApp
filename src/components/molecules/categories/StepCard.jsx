const StepCard = ({item}) => {
    const {img, text, subtext} = item;
    return(
        <div className=" flex w-[24.125rem] rounded-[0.625rem] px-2 justify-center items-center gap-4">
        <div className=" w-[4.375rem] h-[4.375rem]">
            <img className="w-full h-full object-contain" src={img} />
        </div>
        <div className="flex flex-col gap-[0.625rem] ">
            <h3 className="text-[1rem] leading-normal font-[600]">{text}</h3>
            <p className="text-[1rem] leading-normal font-[200]">{subtext}</p>
        </div>
    </div>
    )
}

export default StepCard;