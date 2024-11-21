import Link from "next/link";
import Image from "next/image";
import { news } from "../data/news.json";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Top Stories</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {news.map((item) => (
          <Link key={item.id} href={`/article/${item.id}`} className="block">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {item.image && (
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={640} 
                  height={360} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}