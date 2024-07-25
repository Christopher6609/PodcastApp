const Button = ({children}) => {
    return(
    
            <button className="text-[1rem] leading-[1.362rem] font-[400] w-[7.125rem] h-[2.625rem] bg-[#FFF] text-[#320E3B] rounded-[0.625rem] border-[1px] border-[#320E3B]">
               {children}
            </button>
        
    )
}

export default Button;