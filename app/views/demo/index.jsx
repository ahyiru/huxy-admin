import {useState, useEffect, useMemo} from 'react';
import {usePrevious} from '@huxy/use';
import {sleep, clone} from '@huxy/utils';
import Settings from '@app/components/settings';
// import Bugua from './bagua';
import './index.less';

const Index = (props) => {
  const [state, setState] = useState(0);
  const prevState = usePrevious(state);
  useEffect(() => {
    const fakeFetch = async () => {
      await sleep();
      return {};
    };
    fakeFetch();
  }, []);
  return (
    <div className="demo-container">
      prev: {prevState}
      current: {state}
      <button onClick={() => setState((prev) => prev + 1)}>test</button>
    </div>
  );
};

export default Index;
