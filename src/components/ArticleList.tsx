<<<<<<< HEAD
'use client'

import { useState, useEffect } from 'react'
import { Article, articleApi } from '@/lib/supabase'
import ArticleView from './ArticleView'
import ArticleForm from './ArticleForm'

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      setLoading(true)
      const data = await articleApi.getAll()
      setArticles(data)
    } catch (error) {
      console.error('Error loading articles:', error)
      alert('Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return

    try {
      await articleApi.delete(id)
      setArticles(articles.filter(article => article.id !== id))
      if (selectedArticle?.id === id) {
        setSelectedArticle(null)
      }
    } catch (error) {
      console.error('Error deleting article:', error)
      alert('Failed to delete article')
    }
  }

  const handleEdit = (article: Article) => {
    setEditingArticle(article)
    setSelectedArticle(null)
  }

  const handleArticleUpdate = (updatedArticle: Article) => {
    setArticles(articles.map(article =>
      article.id === updatedArticle.id ? updatedArticle : article
    ))
    setEditingArticle(null)
  }

  const handleArticleCreate = (newArticle: Article) => {
    setArticles([newArticle, ...articles])
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {editingArticle && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Edit Article</h3>
            <button
              onClick={() => setEditingArticle(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <ArticleForm
            article={editingArticle}
            onSubmit={handleArticleUpdate}
            onCancel={() => setEditingArticle(null)}
          />
        </div>
      )}

      {selectedArticle && (
        <ArticleView
          article={selectedArticle}
          onEdit={() => handleEdit(selectedArticle)}
          onDelete={() => handleDelete(selectedArticle.id)}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">All Articles ({articles.length})</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {articles.length === 0 ? (
            <li className="px-6 py-4 text-center text-gray-500">
              No articles yet. Create your first article!
            </li>
          ) : (
            articles.map((article) => (
              <li key={article.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-500 truncate">
                      By {article.owner} • {new Date(article.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(article)}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="text-red-600 hover:text-red-900 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
=======
'use client'

import { useState, useEffect } from 'react'
import { Article, articleApi } from '@/lib/supabase'
import ArticleView from './ArticleView'
import ArticleForm from './ArticleForm'

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      setLoading(true)
      const data = await articleApi.getAll()
      setArticles(data)
    } catch (error) {
      console.error('Error loading articles:', error)
      alert('Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return

    try {
      await articleApi.delete(id)
      setArticles(articles.filter(article => article.id !== id))
      if (selectedArticle?.id === id) {
        setSelectedArticle(null)
      }
    } catch (error) {
      console.error('Error deleting article:', error)
      alert('Failed to delete article')
    }
  }

  const handleEdit = (article: Article) => {
    setEditingArticle(article)
    setSelectedArticle(null)
  }

  const handleArticleUpdate = (updatedArticle: Article) => {
    setArticles(articles.map(article =>
      article.id === updatedArticle.id ? updatedArticle : article
    ))
    setEditingArticle(null)
  }

  const handleArticleCreate = (newArticle: Article) => {
    setArticles([newArticle, ...articles])
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {editingArticle && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Edit Article</h3>
            <button
              onClick={() => setEditingArticle(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <ArticleForm
            article={editingArticle}
            onSubmit={handleArticleUpdate}
            onCancel={() => setEditingArticle(null)}
          />
        </div>
      )}

      {selectedArticle && (
        <ArticleView
          article={selectedArticle}
          onEdit={() => handleEdit(selectedArticle)}
          onDelete={() => handleDelete(selectedArticle.id)}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">All Articles ({articles.length})</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {articles.length === 0 ? (
            <li className="px-6 py-4 text-center text-gray-500">
              No articles yet. Create your first article!
            </li>
          ) : (
            articles.map((article) => (
              <li key={article.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-500 truncate">
                      By {article.owner} • {new Date(article.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(article)}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="text-red-600 hover:text-red-900 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
>>>>>>> 880ffae15bffb6e6095a4913c0e271703b12f0ac
