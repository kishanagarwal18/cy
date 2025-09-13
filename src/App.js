import './App.css';
import SubscriptionCard from './components/SubscriptionCard'; // updated path

function App() {
  const currentPlan = "Basic"; // replace dynamically later

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Subscription Management</h1>
        <SubscriptionCard currentPlan={currentPlan} />
      </header>
    </div>
  );
}

export default App;
