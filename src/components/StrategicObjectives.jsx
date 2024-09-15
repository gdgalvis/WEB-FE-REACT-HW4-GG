const objectivesData = [
    { id: 1, goal: "Make Violins smaller", target: 500, progress: 250, compliance: 50 },
    { id: 2, goal: "Get rid of Termites", target: 1000000, progress: 50000, compliance: 5 },
    { id: 3, goal: "Hire Steve Buscemi", target: 1000, progress: 700, compliance: 70 },
    { id: 4, goal: "Kill Santa Clause", target: 150000, progress: 150000, compliance: 100 },
    { id: 5, goal: "Make the violins actually work", target: 150000, progress: 15, compliance: 1 }
  ];
  
  const getStatusColor = (compliance) => {
    if (compliance <= 35) return "text-red-500";
    if (compliance <= 75) return "text-yellow-500";
    return "text-green-500";
  };
  
  const StrategicObjectives = () => {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">3. Strategic Objectives</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Code</th>
              <th className="border p-2">Objective</th>
              <th className="border p-2">Goal</th>
              <th className="border p-2">Progress</th>
              <th className="border p-2">Acomplisment</th>
              <th className="border p-2">State</th>
            </tr>
          </thead>
          <tbody>
            {objectivesData.map(obj => (
              <tr key={obj.id}>
                <td className="border p-2">{obj.id}</td>
                <td className="border p-2">{obj.goal}</td>
                <td className="border p-2">${obj.target.toLocaleString()}</td>
                <td className="border p-2">${obj.progress.toLocaleString()}</td>
                <td className="border p-2">{obj.compliance}%</td>
                <td className={`border p-2 ${getStatusColor(obj.compliance)}`}>
                  {obj.compliance <= 35 ? "Critical" : obj.compliance <= 75 ? "Acceptable" : "Success"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default StrategicObjectives;
  