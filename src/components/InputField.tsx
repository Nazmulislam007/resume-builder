type InputProps = {
  error_message: string;
  className?: string;
  title: string;
  [rest: string]: any;
};

const InputField = ({
  error_message,
  className,
  title,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={title}
        className="tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {title}
      </label>
      <input
        className={`${className} bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
        {...rest}
      />
      {error_message && (
        <p className="text-red-500 text-xs italic">{error_message}</p>
      )}
    </div>
  );
};

export default InputField;
