export default function TopNewsPage() {
  const topStories = [
    { id: 1, title: "Global Climate Summit Concludes" },
    { id: 2, title: "Tech Breakthrough in AI Research" },
    { id: 3, title: "Economic Forecast Shows Growth" }
  ];

  return (
    <ul className="space-y-2">
      {topStories.map((story) => (
        <li key={story.id} className="border-b pb-2 last:border-0">
          {story.title}
        </li>
      ))}
    </ul>
  );
}