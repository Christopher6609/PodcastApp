const EpisodeCard = ({episode}) => {
    const {img} = episode;
    return(
        <div className="px-8  md:px-0">
                <div className="md:w-[17.726rem] md:h-[17.726rem] w-[22rem]">
                  <img
                    className="w-full h-full object-contain"
                    src={img}
                  />
                </div>
         </div>
    )
}


export default EpisodeCard;