import { useState } from 'react';
import { useStore } from '../store/store';
import { handleImageUpload } from '../utils/imageUtils';
import { Image, Trash2, Edit2 } from 'lucide-react';
import { Post } from '../types/facebook';

export const PostEditor = () => {
  const { posts, addPost, updatePost, deletePost, profile } = useStore();
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [formData, setFormData] = useState({
    text: '',
    image: null as string | null,
    likes: 0,
    comments: 0,
    shares: 0,
    timestamp: new Date().toISOString(),
  });

  const handleImageUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, (dataUrl) => {
        setFormData({ ...formData, image: dataUrl });
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updatePost(editingPost.id, formData);
      setEditingPost(null);
    } else {
      addPost({
        ...formData,
        author: profile.name,
        authorAvatar: profile.profilePicture,
      });
    }
    setFormData({
      text: '',
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: new Date().toISOString(),
    });
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setFormData({
      text: post.text,
      image: post.image,
      likes: post.likes,
      comments: post.comments,
      shares: post.shares,
      timestamp: post.timestamp,
    });
  };

  const handleCancel = () => {
    setEditingPost(null);
    setFormData({
      text: '',
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Post Editor</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Post Text</label>
          <textarea
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
            placeholder="What's on your mind?"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Image className="w-4 h-4" />
            Post Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUploadChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-fb-blue file:text-white hover:file:bg-blue-600 cursor-pointer"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Post"
              className="mt-2 w-full max-w-md h-48 object-cover rounded-lg border border-gray-200"
            />
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Likes</label>
            <input
              type="number"
              min="0"
              value={formData.likes}
              onChange={(e) => setFormData({ ...formData, likes: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
            <input
              type="number"
              min="0"
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Shares</label>
            <input
              type="number"
              min="0"
              value={formData.shares}
              onChange={(e) => setFormData({ ...formData, shares: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timestamp</label>
          <input
            type="datetime-local"
            value={formData.timestamp.slice(0, 16)}
            onChange={(e) => setFormData({ ...formData, timestamp: new Date(e.target.value).toISOString() })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-fb-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
          >
            {editingPost ? 'Update Post' : 'Add Post'}
          </button>
          {editingPost && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {posts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Existing Posts ({posts.length})</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 flex items-start justify-between gap-2"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 truncate">{post.text || '(No text)'}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {post.likes} likes • {post.comments} comments • {post.shares} shares
                  </p>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

