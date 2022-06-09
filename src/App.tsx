import "./app/styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img className="img--logo--small" alt="Logo-small" />
        <button className="btn btn--nav">
          <i className="icon icon--base icon--add"></i>
          <div>Add product</div>
        </button>
      </div>
    </div>
  );
}

export default App;
