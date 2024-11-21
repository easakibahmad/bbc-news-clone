export default function LatestArticlesPage() {
  const articles = [
    { id: 1, title: "Renewable Energy Investments Surge" },
    { id: 2, title: "Space Exploration Milestone" },
    { id: 3, title: "AI in Healthcare Advances" }
  ];

  return (
    <ul className="space-y-2">
      {articles.map((article) => (
        <li key={article.id} className="border-b pb-2 last:border-0">
          {article.title}
        </li>
      ))}
    </ul>
  );
}