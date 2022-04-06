import {useState, useEffect, useMemo} from 'react';
import Settings from '@app/components/settings';
import usePrevious from '@huxy/use/src/usePrevious';
// import sleep from '@huxy/utils/src/sleep';
// import Bugua from './bagua';
import './index.less';

const Index = (props) => {
  const [state, setState]=useState(0);
  const prevState=usePrevious(state);
  return (
    <div className="demo-container">
      prev: {prevState}
      current: {state}
      <button onClick={() => setState(prev=>prev+1)}>test</button>
    </div>
  );
};

export default Index;
