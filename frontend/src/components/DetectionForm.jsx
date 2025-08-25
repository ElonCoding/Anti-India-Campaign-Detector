import { useState } from "react";
import { analyzeText } from "../services/api";

export default function DetectionForm({ setResults }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    const result = await analyzeText(text);
    setResults((prev) => [...prev, result]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-grow rounded"
        type="text"
        value={text}
        placeholder="Enter text..."
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Detect
      </button>
    </form>
  );
}
