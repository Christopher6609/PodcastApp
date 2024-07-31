import PropTypes from "prop-types";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label className=" text-[18px] block md:my-[25px] my-[10px]">
        {label}
      </label>
      <input
        className="md:h-[3.5rem] h-[3rem] border-[2px] rounded-[0.375rem] border-[#D0D5DD] w-full px-[1rem]"
        {...otherProps}
      />
    </>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
};

export default FormInput;
