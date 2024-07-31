import PropTypes from 'prop-types'

const FormInput = ({label, ...otherProps}) => {
    return(
        <>
        <label className=" text-[18px] block my-[25px]">{label}</label>
        <input className="h-[3.5rem] border-[2px] rounded-[0.375rem] border-[#D0D5DD] w-full px-[1rem]" {...otherProps} />
        </>
        
    )
}

FormInput.propTypes = {
    label:PropTypes.string,
}

export default FormInput;
