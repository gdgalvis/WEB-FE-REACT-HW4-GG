const dofaData = [
  { id: 1, type: "Weakness", items: [
      { id: 1, description: "Product Fragility", dd: "The product is fragile and prone to damage during shipment" },
      { id: 2, description: "Shipment Issues ", dd: "Delays or mishandling during shipment can cause problems with customer." },
      { id: 3, description: "Nicheness of the Product ", dd: " The product appeals to a small, niche market, which limits its scalability." }
    ]},
  { id: 2, type: "Opportunities", items: [
      { id: 1, description: "Sponsorship Deals ", dd: " Potential partnerships with sponsors could increase brand visibility." },
      { id: 2, description: "Movie Ads ", dd: " Featuring the product in movies or media can build brand recognition." },
      { id: 3, description: "Fear Of Missing Out (F.O.M.O) ", dd: " Creating a sense of urgency among customers can drive demand, especially in limited-edition releases." }
    ]},
  { id: 3, type: "Strenghts", items: [
      { id: 1, description: "Niche Market ", dd: " The product serves a unique, specialized market, providing little direct competition." },
      { id: 2, description: "World Record Size ", dd: " Having a world record attribute sets the product apart and serves as a strong marketing point." },
      { id: 3, description: "Excellent Web Page ", dd: " The online presence, through an engaging and user-friendly website, attracts more customers." }
    ]},
  { id: 4, type: "Threats", items: [
      { id: 1, description: "Competition ", dd: " Emerging competitors offering similar or better alternatives may reduce market share." },
      { id: 2, description: "Global Inflation ", dd: " Rising costs of production and shipping due to inflation could affect profitability and pricing strategies." },
      { id: 3, description: "Fad Goes Away ", dd: " The product could lose popularity if the trend that drives demand fades over time." }
    ]}
];
  
  const Dofa = () => {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">1. Diagnostic</h2>
        <div className="grid grid-cols-2 gap-4" >
          {dofaData.map(section => (
            <div key={section.id} className="border p-4">
              <h3 className="font-bold mb-2">{section.type}</h3>
              <ul>
                {section.items.map(item => (
                  <li key={item.id}>{item.id}. <strong>{item.description}</strong>: {item.dd}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Dofa;
  