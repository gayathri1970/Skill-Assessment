export default function FilterBar({ filter, setFilter }) {
  const filters = ["All", "Todo", "In Progress", "Done"];
  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
