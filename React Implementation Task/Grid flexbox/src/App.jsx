import "./App.css";
import Card from "./components/Card";

function App() {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data?.map((item, index) => (
            <div
              className="col-md-4 d-flex align-items-stretch mb-4"
              key={index}
            >
              <Card title={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
