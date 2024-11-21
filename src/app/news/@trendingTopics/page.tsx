export default function TrendingTopicsPage() {
  const topics = [
    { id: 1, name: "Climate Change" },
    { id: 2, name: "AI Technology" },
    { id: 3, name: "Global Economy" }
  ];

  return (
    <ul className="space-y-2">
      {topics.map((topic) => (
        <li key={topic.id} className="border-b pb-2 last:border-0">
          {topic.name}
        </li>
      ))}
    </ul>
  );
}