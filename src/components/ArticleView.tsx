<<<<<<< HEAD
'use client'

import ReactMarkdown from 'react-markdown'
import { Article } from '@/lib/supabase'

interface ArticleViewProps {
  article: Article
  onEdit: () => void
  onDelete: () => void
  onClose: () => void
}

export default function ArticleView({ article, onEdit, onDelete, onClose }: ArticleViewProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h2>
          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Owner:</strong> {article.owner}</p>
            <p><strong>Created:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
            {article.editors && <p><strong>Editors:</strong> {article.editors}</p>}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
=======
'use client'

import ReactMarkdown from 'react-markdown'
import { Article } from '@/lib/supabase'

interface ArticleViewProps {
  article: Article
  onEdit: () => void
  onDelete: () => void
  onClose: () => void
}

export default function ArticleView({ article, onEdit, onDelete, onClose }: ArticleViewProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h2>
          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Owner:</strong> {article.owner}</p>
            <p><strong>Created:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
            {article.editors && <p><strong>Editors:</strong> {article.editors}</p>}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 880ffae15bffb6e6095a4913c0e271703b12f0ac
