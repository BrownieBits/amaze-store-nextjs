import { create } from 'zustand';

export const useStore = create<{
  name: string;
  slug: string;
  logo: string;
  banner: string;
}>((set) => ({
  name: '',
  slug: '',
  logo: '',
  banner: '',
}));
