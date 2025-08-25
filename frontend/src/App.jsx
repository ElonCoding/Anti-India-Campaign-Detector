import DetectionForm from "./components/DetectionForm";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Anti-India Campaign Detector</h1>
      <DetectionForm setResults={setResults} />
      <ResultsTable results={results} />
    </div>
  );
}

export default App;
