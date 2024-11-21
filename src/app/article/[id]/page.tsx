'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import newsData from "../../../data/news.json";

export default function Article() {
  const { id } = useParams();
  const article = newsData.news.find(item => item.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Article Not Found</h1>
        <p>The article with ID {id} could not be found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center justify-between mb-6 text-gray-600">
          <div>
            <span className="mr-4">By {article.author}</span>
            <span>{article.date}</span>
          </div>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
            {article.category}
          </span>
        </div>

        {article.image && (
          <div className="mb-6">
            <Image 
              src={article.image} 
              alt={article.title} 
              width={1200} 
              height={600} 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg">
          <p className="text-xl font-semibold mb-4">{article.description}</p>
          <p>{article.content}</p>
        </div>
      </article>
    </div>
  );
}