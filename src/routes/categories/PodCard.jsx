const PodCard = ({podcast}) => {
    const {img,headText, episodes, time} = podcast;
    return(
        <div className="bg-[#FFFFFF] w-full md:w-[16.125rem] md:p-4 p-7 rounded-[0.474rem] ">
            <div className="flex justify-between items-center">
            <div>
                <img src={img} />
            </div>
            <div>
                <h3 className="text-[1rem] py-2">{headText}</h3>
                <div className="flex justify-between text-[0.75rem]">
                <p>{episodes}</p> {" "} <p>{time}</p>
                </div>
                <div className="flex gap-2 items-center">
                <img className="w-4 h-4" src="/images/vectorplay.png" />
                <p className="text-[0.875rem]">Play now</p>
                </div>
            </div>
            </div>
      </div>
    )
}

export default PodCard;