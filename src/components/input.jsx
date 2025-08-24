const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-lato text-[10px] md:text-[18px] mx-[24px] md:mx-[40px]">
        {label}
      </label>

      <input
        className="pl-[10px] w-[260px] h-[28px] rounded-[12px] border border-[rgba(231,227,252,0.23)] 
        font-lato text-[10px] mx-[24px] mt-[3px]
        md:pl-[20px] md:w-[450px] md:h-[50px] md:rounded-[24px] 
        md:text-[16px] md:mx-[40px] md:mt-[6px]"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value} // <- penting biar state React terbaca
        onChange={onChange} // <- penting supaya bisa update state
      />
    </div>
  );
};

export default InputField;
