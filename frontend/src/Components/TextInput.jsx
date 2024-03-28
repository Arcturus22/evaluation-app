const TextInput = ({ label, placeholder, value, setValue, className, labelClassName }) => {
  return (
    <div className={`TextInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label} className={`font-semibold ${labelClassName}`}>
        {label}
      </label>
      <input
        type="number"
        min="0"
        max="10"
        placeholder={placeholder}
        className="p-3 border border-solid border-gray-400 rounded placeholder-gray-500  outline-none focus:border-blue-700 focus:border-2"
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
      />
    </div>
  );
};

export default TextInput;
