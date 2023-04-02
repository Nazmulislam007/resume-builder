type ButtonProps = {
  title: string;
  className?: string;
  [rest: string]: any;
};

const Button = ({ title, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
