import { useEffect, useState } from "react";
const API_URL = "https://pokeapi.co/api/v2/ability";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async (search) => {
    const response = await fetch(`${API_URL}/${search}`);
    const data = await response.json();
    setData(data.pokemon);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(search);
  };
  console.log(search);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search ability"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      {/* {data.effect_entries[0].short_effect} */}
      {data.map((poke) => {
        return <h1>{poke.pokemon.name}</h1>;
      })}
    </>
  );
}

export default App;
