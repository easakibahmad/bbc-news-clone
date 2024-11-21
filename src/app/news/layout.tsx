import React,{ReactNode} from 'react';

export default function NewsLayout({
  children,
  topNews,
  latestArticles,
  trendingTopics
}: {
  children: ReactNode;
  topNews: ReactNode;
  latestArticles: ReactNode;
  trendingTopics: ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Content */}
        <div className="md:col-span-2 bg-white p-4">
          <h1 className="text-2xl font-bold mb-4">News Home</h1>
          {children}
        </div>

        {/* Parallel Routes Sidebar */}
        <div className="space-y-4">
          {/* Top News Slot */}
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Top News</h2>
            {topNews}
          </div>

          {/* Latest Articles Slot */}
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Latest Articles</h2>
            {latestArticles}
          </div>

          {/* Trending Topics Slot */}
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Trending Topics</h2>
            {trendingTopics}
          </div>
        </div>
      </div>
    </div>
  );
}