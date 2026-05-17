import { useState } from "react";
import trains from "../data/trains.json";
import TrainCard from "../components/TrainCard";

function Home() {
  const [search, setSearch] = useState("");

  const filteredTrains = trains.filter((train) =>
    train.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Welcome to Railway Tracker</h1>
      <p>Track train details easily</p>

      <input
        type="text"
        placeholder="Search Train..."
        className="search-box"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="train-container">
        {filteredTrains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}

export default Home;