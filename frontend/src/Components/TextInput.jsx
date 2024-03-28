const TextInput = ({
    label,
    placeholder,
    className,
    value,
    setValue,
    labelClassName
  }) => {
    return (
      <div className={`TextInputDiv flex flex-col space-y-2 w-full ${className}`}>
        <label htmlFor={label} className={`font-semibold ${labelClassName}`}>
          {label}
        </label>
        <input
          type="number"
          min="0"
          max="25"
          placeholder={placeholder}
          className="p-3 border border-solid border-gray-400 rounded placeholder-gray-500  outline-none focus:border-blue-700 focus:border-2"
          id={label}
          value={value}
          onChange={(e) => {
            const newValue = Math.min(25, Math.max(0, parseInt(e.target.value) || 0));
            setValue(newValue);
          }}
        />
      </div>
    );
  };
  
  export default TextInput;
  