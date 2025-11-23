export interface Profile {
  name: string;
  profilePicture: string | null;
  coverPhoto: string | null;
  bio: string;
  location: string;
  work: string;
  education: string;
  relationship: string;
  birthday: string;
  website: string;
}

export interface Post {
  id: string;
  text: string;
  image: string | null;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  author: string;
  authorAvatar: string | null;
}

export interface AppState {
  profile: Profile;
  posts: Post[];
  setProfile: (profile: Partial<Profile>) => void;
  addPost: (post: Omit<Post, 'id'>) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  resetProfile: () => void;
  resetPosts: () => void;
}

export const defaultProfile: Profile = {
  name: 'John Doe',
  profilePicture: null,
  coverPhoto: null,
  bio: '',
  location: '',
  work: '',
  education: '',
  relationship: '',
  birthday: '',
  website: '',
};

