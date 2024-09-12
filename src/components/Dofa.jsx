const dofaData = [
    { id: 1, type: "Weakness", items: [
        { id: 1, description: "Product Fragility" },
        { id: 2, description: "Shipment Issues" },
        { id: 3, description: "Nicheness of the Product" }
      ]},
    { id: 2, type: "Opportunities", items: [
        { id: 1, description: "Sponsorhip deals" },
        { id: 2, description: "Movie adds" },
        { id: 3, description: "Fear Of Missing Out (F.O.M.O)" }
      ]},
    { id: 3, type: "Strenghts", items: [
        { id: 1, description: "Niche Market" },
        { id: 2, description: "World Record Size" },
        { id: 3, description: "Excellent web page" }
      ]},
    { id: 4, type: "Threats", items: [
        { id: 1, description: "Competition" },
        { id: 2, description: "Global Inflation" },
        { id: 3, description: "Fad goes away" }
      ]}
  ];
  
  const Dofa = () => {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">1. Diagnóstico Actual</h2>
        <div className="grid grid-cols-2 gap-4">
          {dofaData.map(section => (
            <div key={section.id} className="border p-4">
              <h3 className="font-bold mb-2">{section.type}</h3>
              <ul>
                {section.items.map(item => (
                  <li key={item.id}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Dofa;
  