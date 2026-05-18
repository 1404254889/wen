export interface Topic {
  id: string;
  title: string;
  description: string;
  prompt: string;
  creator: string;
  status: 'forming' | 'completed';
  joinedCount: number;
  targetCount: number;
  likes: string;
  city: string;
  tone: string;
  mode: string;
  deadline: string;
  durationLimit?: number;
  shares?: string;
  bookmarks?: string;
  image?: string;
  contentType?: 'circle' | 'one-day-movie';
}

export interface OneDayMovieClip {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  timestamp: number;
  videoUrl: string;
  hour: number; // 9 to 21
  status: 'pending' | 'approved' | 'rejected';
  isOthers?: boolean;
}

export interface OneDayMovie {
  id: string;
  title: string;
  initiatorId: string;
  initiatorName: string;
  participants: number;
  visibility: 'public' | 'friends' | 'private' | 'selected';
  clips: OneDayMovieClip[];
  startTime: number;
  endTime: number;
  status: 'active' | 'completed';
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  streak: number;
  followers: number;
  following: number;
  gender?: string;
}

export type Screen = 
  | 'splash'
  | 'login'
  | 'home' 
  | 'topic-detail' 
  | 'create-circle'
  | 'create-and-shoot'
  | 'create-success'
  | 'join'
  | 'join-success'
  | 'circle' 
  | 'content-detail' 
  | 'messages'
  | 'dm'
  | 'user-profile'
  | 'personal-profile'
  | 'relation-invite'
  | 'relation-sent'
  | 'relation-review'
  | 'relation-accepted'
  | 'relation-rejected'
  | 'smart-ring'
  | 'shop'
  | 'recharge'
  | 'gift'
  | 'video-edit'
  | 'me'
  | 'my-works'
  | 'friends'
  | 'settings'
  | 'one-day-movie-create'
  | 'one-day-movie-success'
  | 'one-day-movie-showcase'
  | 'one-day-movie-activity'
  | 'shooting-vlog'
  | 'energy-detail'
  | 'liked-topics'
  | 'saved-topics'
  | 'network-list';
