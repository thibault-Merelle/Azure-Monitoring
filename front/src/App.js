import search from "./CallApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img
            src="../public/logo-simplon.jpg"
            className="App-logo"
            alt="logo"
          />
          <p>Monitoring Azure Simplon</p>
        </div>
      </header>
      <div className="corps">
        <div className="V1">
          <search.Search1 />
        </div>
        <div className="V2">
          <search.Search2 />
        </div>
        <div className="V3">
          <search.Search3 />
        </div>
      </div>
    </div>
  );
}

export default App;
