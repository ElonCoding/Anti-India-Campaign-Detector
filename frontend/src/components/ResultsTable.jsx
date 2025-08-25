export default function ResultsTable({ results }) {
  if (results.length === 0) return null;

  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Input</th>
          <th className="border p-2">Prediction</th>
        </tr>
      </thead>
      <tbody>
        {results.map((res, i) => (
          <tr key={i}>
            <td className="border p-2">{res.input}</td>
            <td className="border p-2">{res.prediction}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
