const dofaData = [
    { id: 1, type: "Debilidades", items: [
        { id: 1, description: "Debilidad 1" },
        { id: 2, description: "Debilidad 2" },
        { id: 3, description: "Debilidad 3" }
      ]},
    { id: 2, type: "Oportunidades", items: [
        { id: 1, description: "Oportunidad 1" },
        { id: 2, description: "Oportunidad 2" },
        { id: 3, description: "Oportunidad 3" }
      ]},
    { id: 3, type: "Fortalezas", items: [
        { id: 1, description: "Fortaleza 1" },
        { id: 2, description: "Fortaleza 2" },
        { id: 3, description: "Fortaleza 3" }
      ]},
    { id: 4, type: "Amenazas", items: [
        { id: 1, description: "Amenaza 1" },
        { id: 2, description: "Amenaza 2" },
        { id: 3, description: "Amenaza 3" }
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
  