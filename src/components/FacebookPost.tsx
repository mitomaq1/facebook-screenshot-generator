import { formatTimestamp } from '../utils/imageUtils';
import { Post } from '../types/facebook';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface FacebookPostProps {
  post: Post;
}

export const FacebookPost = ({ post }: FacebookPostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      {/* Post Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
          {post.authorAvatar ? (
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm font-semibold">
              {post.author.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-fb-text text-sm hover:underline cursor-pointer">
              {post.author}
            </h3>
          </div>
          <p className="text-xs text-fb-text-secondary">
            {formatTimestamp(post.timestamp)}
          </p>
        </div>
      </div>

      {/* Post Content */}
      {post.text && (
        <div className="mb-3">
          <p className="text-fb-text text-sm whitespace-pre-wrap break-words">
            {post.text}
          </p>
        </div>
      )}

      {/* Post Image */}
      {post.image && (
        <div className="mb-3 -mx-4">
          <img
            src={post.image}
            alt="Post"
            className="w-full max-h-96 object-cover"
          />
        </div>
      )}

      {/* Post Stats */}
      {(post.likes > 0 || post.comments > 0 || post.shares > 0) && (
        <div className="flex items-center justify-between text-xs text-fb-text-secondary pb-3 mb-3 border-b border-gray-200">
          <div className="flex items-center gap-4">
            {post.likes > 0 && (
              <span>{post.likes.toLocaleString()} {post.likes === 1 ? 'like' : 'likes'}</span>
            )}
            {post.comments > 0 && (
              <span>{post.comments.toLocaleString()} {post.comments === 1 ? 'comment' : 'comments'}</span>
            )}
            {post.shares > 0 && (
              <span>{post.shares.toLocaleString()} {post.shares === 1 ? 'share' : 'shares'}</span>
            )}
          </div>
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-around pt-2 border-t border-gray-200">
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 text-fb-text-secondary text-sm font-medium transition-colors">
          <ThumbsUp className="w-5 h-5" />
          Like
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 text-fb-text-secondary text-sm font-medium transition-colors">
          <MessageCircle className="w-5 h-5" />
          Comment
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 text-fb-text-secondary text-sm font-medium transition-colors">
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>
    </div>
  );
};

