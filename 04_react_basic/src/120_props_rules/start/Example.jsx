import Bye from './components/Bye';
import Hello from './components/Hello';

const Example = () => {
  const myName = 'Tom';

  return (
    <>
      <Hello name={myName} />
      <Bye name={myName} />
    </>
  );
};

export default Example;
