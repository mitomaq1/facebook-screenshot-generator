import { useStore } from '../store/store';
import { FacebookPost } from './FacebookPost';
import { MapPin, Briefcase, GraduationCap, Heart, Calendar, Globe } from 'lucide-react';

export const FacebookProfile = () => {
  const { profile, posts } = useStore();

  return (
    <div id="facebook-preview" className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="relative w-full h-64 bg-gray-300">
        {profile.coverPhoto ? (
          <img
            src={profile.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
        )}
        
        {/* Profile Picture */}
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="w-36 h-36 rounded-full bg-white p-1">
            <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
              {profile.profilePicture ? (
                <img
                  src={profile.profilePicture}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl font-semibold">
                  {profile.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white border-b border-gray-200 pt-20 pb-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-fb-text mb-2">{profile.name || 'Name'}</h1>
          
          {/* Profile Details */}
          <div className="flex flex-wrap gap-4 text-sm text-fb-text-secondary">
            {profile.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
            )}
            {profile.work && (
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{profile.work}</span>
              </div>
            )}
            {profile.education && (
              <div className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                <span>{profile.education}</span>
              </div>
            )}
            {profile.relationship && (
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{profile.relationship}</span>
              </div>
            )}
            {profile.birthday && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{profile.birthday}</span>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-fb-blue hover:underline">
                  {profile.website}
                </a>
              </div>
            )}
          </div>

          {/* Bio */}
          {profile.bio && (
            <div className="mt-4 text-fb-text text-sm">
              <p className="whitespace-pre-wrap">{profile.bio}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="bg-fb-blue text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-blue-600 transition-colors">
              Add Story
            </button>
            <button className="bg-fb-gray text-fb-text px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">
              Edit Profile
            </button>
            <button className="bg-fb-gray text-fb-text px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">
              More
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Sidebar - About */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
              <h2 className="text-lg font-bold text-fb-text mb-4">About</h2>
              <div className="space-y-3 text-sm">
                {profile.location && (
                  <div>
                    <p className="text-fb-text-secondary mb-1">Location</p>
                    <p className="text-fb-text">{profile.location}</p>
                  </div>
                )}
                {profile.work && (
                  <div>
                    <p className="text-fb-text-secondary mb-1">Work</p>
                    <p className="text-fb-text">{profile.work}</p>
                  </div>
                )}
                {profile.education && (
                  <div>
                    <p className="text-fb-text-secondary mb-1">Education</p>
                    <p className="text-fb-text">{profile.education}</p>
                  </div>
                )}
                {profile.relationship && (
                  <div>
                    <p className="text-fb-text-secondary mb-1">Relationship</p>
                    <p className="text-fb-text">{profile.relationship}</p>
                  </div>
                )}
                {profile.birthday && (
                  <div>
                    <p className="text-fb-text-secondary mb-1">Birthday</p>
                    <p className="text-fb-text">{profile.birthday}</p>
                  </div>
                )}
                {profile.website && (
                  <div>
                    <p className="text-fb-text-secondary mb-1">Website</p>
                    <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-fb-blue hover:underline">
                      {profile.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Timeline - Posts */}
          <div className="lg:col-span-2">
            {posts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-fb-text-secondary">No posts yet. Create a post to get started!</p>
              </div>
            ) : (
              posts.map((post) => <FacebookPost key={post.id} post={post} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

