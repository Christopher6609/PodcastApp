

const Card = ({item}) => {
    const {text, subtext, img} = item;
    return(
        <div className="bg-[#320E3B] bg-opacity-10 h-[14.813rem] w-[24.25rem] rounded-[0.625rem] py-5 px-5" >
            <img src={img} />
            <h3 className="text-[1.5rem] leading-[2.043rem] font-[600] py-4">
        {text}
      </h3>
      <p>{subtext}</p>
    </div>
    )
}

export default Card;