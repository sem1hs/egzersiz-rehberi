type Props = {
  error: Error;
};
const Error = ({ error }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-white text-sm md:text-lg text-center px-4 md:text-left md:px-0">
        {error.message} ❌
      </p>
    </div>
  );
};

export default Error;
