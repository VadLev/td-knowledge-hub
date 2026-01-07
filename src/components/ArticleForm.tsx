<<<<<<< HEAD
'use client'

import { useState } from 'react'
import { Article, articleApi } from '@/lib/supabase'

interface ArticleFormProps {
  article?: Article | null
  onSubmit: (article: Article) => void
  onCancel?: () => void
}

export default function ArticleForm({ article, onSubmit, onCancel }: ArticleFormProps) {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    content: article?.content || '',
    owner: article?.owner || '',
    editors: article?.editors || ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.content.trim() || !formData.owner.trim()) {
      alert('Please fill in all required fields (title, content, owner)')
      return
    }

    try {
      setLoading(true)

      if (article) {
        // Update existing article
        const updatedArticle = await articleApi.update(article.id, formData)
        onSubmit(updatedArticle)
      } else {
        // Create new article
        const newArticle = await articleApi.create(formData)
        onSubmit(newArticle)
        // Reset form after creating
        setFormData({ title: '', content: '', owner: '', editors: '' })
      }
    } catch (error) {
      console.error('Error saving article:', error)
      alert('Failed to save article')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {article ? 'Edit Article' : 'Create New Article'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter article title"
            required
          />
        </div>

        <div>
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 mb-1">
            Owner *
          </label>
          <input
            type="text"
            id="owner"
            value={formData.owner}
            onChange={(e) => handleChange('owner', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter owner name"
            required
          />
        </div>

        <div>
          <label htmlFor="editors" className="block text-sm font-medium text-gray-700 mb-1">
            Editors
          </label>
          <input
            type="text"
            id="editors"
            value={formData.editors}
            onChange={(e) => handleChange('editors', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter editor names (optional)"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content (Markdown) *
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => handleChange('content', e.target.value)}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
            placeholder="Enter article content in Markdown format"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Supports Markdown formatting (**, *, #, etc.)
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : (article ? 'Update Article' : 'Create Article')}
          </button>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
=======
'use client'

import { useState } from 'react'
import { Article, articleApi } from '@/lib/supabase'

interface ArticleFormProps {
  article?: Article | null
  onSubmit: (article: Article) => void
  onCancel?: () => void
}

export default function ArticleForm({ article, onSubmit, onCancel }: ArticleFormProps) {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    content: article?.content || '',
    owner: article?.owner || '',
    editors: article?.editors || ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.content.trim() || !formData.owner.trim()) {
      alert('Please fill in all required fields (title, content, owner)')
      return
    }

    try {
      setLoading(true)

      if (article) {
        // Update existing article
        const updatedArticle = await articleApi.update(article.id, formData)
        onSubmit(updatedArticle)
      } else {
        // Create new article
        const newArticle = await articleApi.create(formData)
        onSubmit(newArticle)
        // Reset form after creating
        setFormData({ title: '', content: '', owner: '', editors: '' })
      }
    } catch (error) {
      console.error('Error saving article:', error)
      alert('Failed to save article')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {article ? 'Edit Article' : 'Create New Article'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter article title"
            required
          />
        </div>

        <div>
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 mb-1">
            Owner *
          </label>
          <input
            type="text"
            id="owner"
            value={formData.owner}
            onChange={(e) => handleChange('owner', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter owner name"
            required
          />
        </div>

        <div>
          <label htmlFor="editors" className="block text-sm font-medium text-gray-700 mb-1">
            Editors
          </label>
          <input
            type="text"
            id="editors"
            value={formData.editors}
            onChange={(e) => handleChange('editors', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter editor names (optional)"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content (Markdown) *
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => handleChange('content', e.target.value)}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
            placeholder="Enter article content in Markdown format"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Supports Markdown formatting (**, *, #, etc.)
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : (article ? 'Update Article' : 'Create Article')}
          </button>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
>>>>>>> 880ffae15bffb6e6095a4913c0e271703b12f0ac
