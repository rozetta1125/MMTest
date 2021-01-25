import './App.scss';
import React, {useState} from 'react';
import useFetch from './services/useFetch';
import Spinner from "./components/Spinner";
import TrendingPost from './components/TrendingPost';

function App() {
  const [limit,setLimit] = useState(20);

  const { data:trending, loading, error } = useFetch(
    `&limit=${limit}`
  );

  if (error) throw error;
  if (loading) return <Spinner />;
  if (trending.data.length === 0) return <div>There is no Data</div>;

  const filteredTrending = trending;

  return (
    <div className="App">
      <div id="limit">
        <label>Display: </label>
        <select 
          value={limit} 
          onChange={(e)=>setLimit(e.target.value)}
        >
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </div>
      <section id="Trending-Container">
        {filteredTrending.data.map(TrendingPost)}
      </section>
    </div>
  );
}

export default App;
