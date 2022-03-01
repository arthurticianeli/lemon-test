import Button from "./Button";

function App() {
  const handleClick = () => alert("OnClick");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        maxWidth: "1500px",
        margin: "auto",
      }}
    >
      <div>
        <h1>Primary</h1>
        <p>Padrão (sem props color)</p>
        <Button onClick={handleClick}>Text</Button>
        <p>icon="arrow-right"</p>
        <Button icon="arrow-right" onClick={handleClick}>
          Text
        </Button>
        <p>icon="check"</p>
        <Button icon="check" onClick={handleClick}>
          Text
        </Button>
        <p>icon="refresh"</p>
        <Button icon="refresh" onClick={handleClick}>
          Text
        </Button>
        <p>disabled</p>
        <Button disabled onClick={handleClick}>
          Text
        </Button>
        <p>disabled icon="refresh"</p>
        <Button disabled icon="refresh" onClick={handleClick}>
          Text
        </Button>
      </div>
      <div>
        <h1>Secondary</h1>
        <p>color="secondary"</p>
        <Button color="secondary" onClick={handleClick}>
          Text
        </Button>
        <p>icon="arrow-right"</p>
        <Button color="secondary" icon="arrow-right" onClick={handleClick}>
          Text
        </Button>
        <p>icon="check"</p>
        <Button color="secondary" icon="check" onClick={handleClick}>
          Text
        </Button>
        <p>icon="refresh"</p>
        <Button color="secondary" icon="refresh" onClick={handleClick}>
          Text
        </Button>
        <p>disabled</p>
        <Button color="secondary" disabled onClick={handleClick}>
          Text
        </Button>
        <p>disabled icon="refresh"</p>
        <Button color="secondary" disabled icon="refresh" onClick={handleClick}>
          Text
        </Button>
      </div>
      <div>
        <h1>Responsividade</h1>
        <div style={{ width: "200px", background: "#ccc" }}>
          <p>Container - width: "200px"</p>
          <Button onClick={handleClick}>Text</Button>
          <p>Icon</p>
          <Button icon="arrow-right" onClick={handleClick}>
            Text
          </Button>
        </div>
        <div style={{ width: "600px", background: "#ccc" }}>
          <p>Container - width: "800px"</p>
          <Button onClick={handleClick}>Text</Button>
          <p>Icon</p>
          <Button icon="arrow-right" onClick={handleClick}>
            Text
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
