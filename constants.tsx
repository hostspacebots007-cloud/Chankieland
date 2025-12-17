import { 
  Mic2, 
  Sliders, 
  Music, 
  PenTool, 
  Headphones, 
  Radio, 
  Video, 
  Speaker, 
  Users 
} from 'lucide-react';
import { Service, Testimonial, BlogPost } from './types';

export const STUDIO_NAME = "Chankieland Studios";
export const FOUNDER_NAME = "Earnest Seakgosing";
export const FACEBOOK_URL = "https://www.facebook.com/chankieland/";
export const FOUNDER_FB_URL = "https://www.facebook.com/earnest.seakgosing";
export const AMAZON_ALBUM_URL = "https://www.amazon.co.uk/dp/B008A3MSDG/";
export const WHATSAPP_NUMBER = "26772481663"; // Placeholder based on location +267

export const SERVICES: Service[] = [
  {
    id: 'recording',
    title: 'Professional Recording',
    description: 'Pristine vocal and instrument tracking in our acoustically treated rooms using industry-standard microphones.',
    icon: Mic2
  },
  {
    id: 'mixing',
    title: 'Mixing & Mastering',
    description: 'Transform your raw tracks into radio-ready hits with our high-end analog and digital processing chain.',
    icon: Sliders
  },
  {
    id: 'production',
    title: 'Music Production',
    description: 'Full-service production from beat making to arranging, tailored to your unique sound and vision.',
    icon: Music
  },
  {
    id: 'songwriting',
    title: 'Songwriting',
    description: 'Creative assistance with composition, lyrics, and arrangement to help you tell your story.',
    icon: PenTool
  },
  {
    id: 'vocal-coaching',
    title: 'Vocal Coaching',
    description: 'Professional guidance during sessions to extract your best possible performance.',
    icon: Headphones
  },
  {
    id: 'podcast',
    title: 'Podcast Production',
    description: 'End-to-end podcast recording, editing, and post-production for crisp, clear spoken word audio.',
    icon: Radio
  },
  {
    id: 'post-production',
    title: 'Audio Post-Production',
    description: 'Sound design, foley, and mixing for video, film, and commercial media.',
    icon: Video
  },
  {
    id: 'live-sound',
    title: 'Live Sound Engineering',
    description: 'Professional live mixing and sound reinforcement for events and worship services.',
    icon: Speaker
  },
  {
    id: 'mentoring',
    title: 'Artist Mentoring',
    description: 'Comprehensive career guidance and artistic development for upcoming secular and gospel artists.',
    icon: Users
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Thabo M.",
    role: "Gospel Artist",
    content: "Chankieland isn't just a studio; it's a sanctuary for creativity. Earnest's guidance helped me find my true sound. The spiritual atmosphere is inspiring.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: '2',
    name: "Sarah K.",
    role: "Pop Singer-Songwriter",
    content: "The professionalism here is unmatched in Gaborone. From the equipment to the engineering, everything is top-tier. My single sounds international.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: '3',
    name: "David L.",
    role: "Worship Leader",
    content: "I appreciate the heart behind the work. They treat every project with respect and excellence. Highly recommended for any serious musician.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "5 Tips for a Better Vocal Recording Session",
    excerpt: "Preparing for the studio is just as important as the session itself. Here is how to get ready.",
    date: "October 15, 2023",
    image: "https://picsum.photos/600/400?random=20",
    category: "Tips"
  },
  {
    id: '2',
    title: "The Art of Mixing: Analog vs Digital",
    excerpt: "Why we use a hybrid approach at Chankieland to give you the best of both worlds.",
    date: "September 22, 2023",
    image: "https://picsum.photos/600/400?random=21",
    category: "Gear"
  },
  {
    id: '3',
    title: "Chankieland Welcomes New Mentoring Class",
    excerpt: "We are excited to announce our new cohort of talented artists joining the mentoring program.",
    date: "August 05, 2023",
    image: "https://picsum.photos/600/400?random=22",
    category: "News"
  }
];