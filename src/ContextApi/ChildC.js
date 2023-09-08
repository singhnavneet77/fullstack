import { useContext } from 'react';
import { MyContext } from './MyContext';

function ChildC() {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Updated via context Api!")}>
        Test Context Api
      </button>
    </div>
  );
}

export default ChildC;