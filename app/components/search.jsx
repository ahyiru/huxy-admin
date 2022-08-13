import Input from '@app/components/base/input';

const GlobalSearch = props => {
  const onChange = value => {
    console.log(value);
  };
  return (
    <a className="global-search">
      <Input placeholder="search..." onChange={onChange} />
    </a>
  );
};

export default GlobalSearch;
