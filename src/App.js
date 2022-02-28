import Button from "./Button";

function App() {
  return (
    <div style={{ width: "400px" }}>
      <Button color="primary">Text</Button>
      <Button color="primary" icon="arrow-right">
        Text
      </Button>
      <Button color="primary" disabled>
        Text
      </Button>

      <Button color="secondary">Text</Button>
      <Button color="secondary" icon="arrow-right">
        Text
      </Button>
      <Button color="secondary" icon="check">
        Text
      </Button>
      <Button color="secondary" icon="refresh">
        Text
      </Button>

      <Button color="secondary" disabled>
        Text
      </Button>
    </div>
  );
}

export default App;
