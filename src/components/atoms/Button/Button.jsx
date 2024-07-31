import PropTypes from 'prop-types';

const Button = ({children, style}) => {
    
    return(
    
            <button className="border-[1px] border-[black] rounded-[1rem] py-[0.875rem] px-[1rem] hover:bg-[#320E3B] hover:text-[#FFF] hover:border-[#FFF]" style={style}>
               {children}
            </button>
        
    )
    
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default Button;