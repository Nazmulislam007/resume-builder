type TextAreaProps = {
  no: string;
  className: string;
  [rest: string]: any;
};

const TextInput = ({ no, className, ...rest }: TextAreaProps) => {
  return (
    <div className="flex items-start mb-2">
      <label htmlFor="anwser1" className="text-lg mr-3">
        {no}
      </label>
      <textarea
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        maxLength={80}
        rows={2}
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextInput;
