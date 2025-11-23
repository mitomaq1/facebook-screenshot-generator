import { create } from 'zustand';
import { AppState, Profile, Post, defaultProfile } from '../types/facebook';

export const useStore = create<AppState>((set) => ({
  profile: { ...defaultProfile },
  posts: [],

  setProfile: (updates) =>
    set((state) => ({
      profile: { ...state.profile, ...updates },
    })),

  addPost: (postData) =>
    set((state) => ({
      posts: [
        {
          ...postData,
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        },
        ...state.posts,
      ],
    })),

  updatePost: (id, updates) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, ...updates } : post
      ),
    })),

  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),

  resetProfile: () =>
    set({
      profile: { ...defaultProfile },
    }),

  resetPosts: () =>
    set({
      posts: [],
    }),
}));

