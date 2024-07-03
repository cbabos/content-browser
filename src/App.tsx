import './App.css';
import ListView from './components/ListView';

function App() {
  const data = new Array(100).fill(1).map((item, index) => {
      return {
          contentID: index.toString(), 
          title: `Title #${index}`, 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ipsum exercitationem nostrum dolorem cum? Quos, quasi dicta? Vel delectus, ab quia illo culpa corrupti beatae alias deserunt dignissimos quidem."
      }
  });

  return (
    <div className="App">
      <ListView content={data} />
    </div>
  );
}

export default App;
