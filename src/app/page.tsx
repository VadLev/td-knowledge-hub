// ... existing imports ...
import ArticleList from '@/components/ArticleList'
// import ArticleForm from '@/components/ArticleForm' // Удалите этот импорт, если ArticleForm больше не используется здесь.

export default function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Base Articles</h2>
        <p className="text-gray-600">
          Create, read, update, and delete articles about targeted display campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3"> {/* Изменено, чтобы ArticleList занимал всю ширину */}
          <ArticleList />
        </div>
        {/* Удален ArticleForm отсюда */}
      </div>
    </div>
  )
}