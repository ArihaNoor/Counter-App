import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";


function App() {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    fetchCounters();
  }, []);

  const fetchCounters = async () => {
    const response = await axios.get("http://localhost:3000/counters");
    setCounters(response.data);
  };

  const incrementCounter = async () => {
    await axios.post("http://localhost:3000/counters/increment");
    fetchCounters();
  };

  const decrementCounter = async () => {
    await axios.post("http://localhost:3000/counters/decrement");
    fetchCounters();
  };

  const deleteCounter = async (id) => {
    await axios.delete(`http://localhost:3000/counters/delete/${id}`);
    fetchCounters();
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-center font-bold">Counter Application</h1>
      <div className="flex justify-center items-center gap-2 mt-6">
        <button onClick={incrementCounter} className="bg-black text-white px-2 py-1 rounded-lg">Increment</button>
        <button onClick={decrementCounter} className="bg-black text-white px-2 py-1 rounded-lg">Decrement</button>
      </div>
      <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl text-center font-bold mt-4">Saved Counters</h2>
      <table className="border mt-4">
        <thead>
          <tr>
            <th>Value</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {counters.map((counter) => (
            <tr key={counter._id}>
              <td>{counter.value}</td>
              <td>{new Date(counter.timestamp).toLocaleString()}</td>
              <td>
                <button onClick={() => deleteCounter(counter._id)}><MdDelete className="text-3xl text-red-700" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
