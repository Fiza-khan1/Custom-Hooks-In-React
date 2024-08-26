
import useFetch from "./useFetch";

import { useCounter } from './useCounter';
import useFormInput from './useForminput'; // Corrected import path
import useArray from "./useArray";

const ArrayComponent = () => {
  const number = useFormInput('');
  const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6]);

  return (
 
    <div>
      <div>{array.join(", ")}</div>
      
     
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <br/>
      <br/>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <br/>
      <br/>
      <button onClick={() => filter(n => n < 4)}>Keep Numbers Less Than 4</button>
      <br/>
      <br/>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <br/>
      <br/>
      <button onClick={clear}>Clear</button>
   
   <br/>

      <input
          type="number"
          value={number.value} 
          onChange={number.onChange} 
             
        />
        <button onClick={() => push({number:number.value})}>Add a number</button>
       
       
   
    </div>
  );
}

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default function App() {
 


  const [count, increment] = useCounter(8);
  const name = useFormInput(''); // Use this for the input field



  return (
    <>
    <Home/>
      <ArrayComponent />
      <p>Value of count: {count}</p>
      <button onClick={increment}>Increment</button>
      <div>
        <input
          type="text"
          value={name.value} 
          onChange={name.onChange} 
        />
      </div>
    </>
  );
}
