type TitleProps = {
  title: string;
};

const Title = ({ title = `엄` }: Partial<TitleProps>) => {
  return <h2 className={`py-2 pb-5 text-4xl font-bold`}>{title}</h2>;
};

export default Title;
