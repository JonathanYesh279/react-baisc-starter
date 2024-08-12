export function AnimalList({ animalInfos = [] }) {
  
  return (
    <div className='table-container'>
      <h2 className='header-tabel'>Rare Animals</h2>
      <table>
        <tbody>
          {animalInfos.map((animal, idx) => (
            <tr key={idx}>
              <td>{animal.type}</td>
              <td>{animal.count}</td>
              <td>
                <a
                  href={`https://www.google.com/search?q=${animal.search}`}
                  target="_blank"
                >
                  Search
                </a>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
