import { useStore } from '../store/store';
import { handleImageUpload } from '../utils/imageUtils';
import { Upload, User, MapPin, Briefcase, GraduationCap, Heart, Calendar, Globe } from 'lucide-react';

export const ProfileEditor = () => {
  const { profile, setProfile } = useStore();

  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, (dataUrl) => {
        setProfile({ profilePicture: dataUrl });
      });
    }
  };

  const handleCoverPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, (dataUrl) => {
        setProfile({ coverPhoto: dataUrl });
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Editor</h2>
      
      {/* Profile Picture */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <User className="w-4 h-4" />
          Profile Picture
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-fb-blue file:text-white hover:file:bg-blue-600 cursor-pointer"
        />
        {profile.profilePicture && (
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="mt-2 w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
        )}
      </div>

      {/* Cover Photo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Cover Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverPhotoUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-fb-blue file:text-white hover:file:bg-blue-600 cursor-pointer"
        />
        {profile.coverPhoto && (
          <img
            src={profile.coverPhoto}
            alt="Cover"
            className="mt-2 w-full h-32 object-cover rounded-lg border border-gray-200"
          />
        )}
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="Enter name"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ bio: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="Tell us about yourself"
          rows={3}
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Location
        </label>
        <input
          type="text"
          value={profile.location}
          onChange={(e) => setProfile({ location: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="City, Country"
        />
      </div>

      {/* Work */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          Work
        </label>
        <input
          type="text"
          value={profile.work}
          onChange={(e) => setProfile({ work: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="Company name"
        />
      </div>

      {/* Education */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Education
        </label>
        <input
          type="text"
          value={profile.education}
          onChange={(e) => setProfile({ education: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="School/University"
        />
      </div>

      {/* Relationship */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Heart className="w-4 h-4" />
          Relationship
        </label>
        <input
          type="text"
          value={profile.relationship}
          onChange={(e) => setProfile({ relationship: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="Relationship status"
        />
      </div>

      {/* Birthday */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Birthday
        </label>
        <input
          type="text"
          value={profile.birthday}
          onChange={(e) => setProfile({ birthday: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="e.g., January 1, 1990"
        />
      </div>

      {/* Website */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          Website
        </label>
        <input
          type="text"
          value={profile.website}
          onChange={(e) => setProfile({ website: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fb-blue"
          placeholder="https://example.com"
        />
      </div>
    </div>
  );
};

