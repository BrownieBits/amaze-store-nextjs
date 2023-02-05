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
  banner:
    '//dslv9ilpbe7p1.cloudfront.net/s5_LY6flav5cPWaKw3GU_w_store_logo_image.png',
}));
