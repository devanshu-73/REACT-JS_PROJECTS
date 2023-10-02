import Card from './Card';
function App() {
  let titleArr = ["Hello", "I", "AM", "Dev_eloper"]
  return (<>
    {/* -------------------------------------------------------------------------- */}
    <div className="container d-flex">
      {/* Hard coding... */}
      {/* <Card title="ABC" />
      <Card title="dev" />
      <Card title="Jay" />
      <Card title="tirth" />
      <Card title="XYZ" /> */}

      {/* -------------------------------------------------------------------------- */}
      {/* Smart Coding */}
      {titleArr.map((val) => (
        <Card title={val} />
      ))}

    </div>
  </>)
}

export default App;
