type ButtonProps = {
  title: string;
  className: string;
  [rest: string]: any;
};

const Button = ({ title, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-green-600 px-10 py-2 text-white text-lg ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
