import Input from '@app/components/base/input';

const GlobalSearch = props => {
  const onChange = value => {
    console.log(value);
  };
  return (
    <span className="link" className="global-search">
      <Input placeholder="search..." onChange={onChange} />
    </span>
  );
};

export default GlobalSearch;
