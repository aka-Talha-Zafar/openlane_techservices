// All editable studio details live here.
export const site = {
  name: "Openlane TechServices",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY,
  email: import.meta.env.VITE_EMAIL,
  location: "Pakistan",
  hours: "Monday to Saturday, 10 am to 7 pm Pakistan time",
  instagram: "[@yourhandle]",
  defaultMessage: "Hello Openlane TechServices, I'd like a free draft website for my business.",
  founders: [
    {
      name: "Muhammad Hassan",
      role: import.meta.env.VITE_HASSAN_PHONE,
      bio: "Software Engineer, Research assistant at LUMS",
      photo: "/hassan.webp",
      instagram: "[@handle]",
      linkedin: "[linkedin-url]",
      whatsapp: import.meta.env.VITE_HASSAN_WHATSAPP,
    },
    {
      name: "Talha Zafar",
      role: import.meta.env.VITE_TALHA_PHONE,
      bio: "AI/ML Engineer, client relations",
      photo: "/talha.webp",
      instagram: "[@handle]",
      linkedin: "[linkedin-url]",
      whatsapp: import.meta.env.VITE_TALHA_WHATSAPP,
    },
  ],
  // High-resolution editorial photos used by the hero carousel. The images are
  // cropped and compressed by Unsplash for the viewport while retaining 4K
  // source quality.
  images: {
    cafe: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=3840&q=90",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3840&q=90",
    gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=3840&q=90",
    salon: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=3840&q=90",
    clinic: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=3840&q=90",
    boutique: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=3840&q=90",
  },
  industryImages: {
    cafe: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=3840&q=90",
    restaurant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=3840&q=90",
    gym: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=3840&q=90",
    salon: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=3840&q=90",
    clinic: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=3840&q=90",
    boutique: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=3840&q=90",
  },
  pricing: {
    essentials: "PKR 20,000",
    business: "PKR 35,000",
    custom: "From PKR 60,000",
    care: "PKR 1,500",
    extras: {
      logo: "from PKR 5,000",
      gbp: "PKR 3,000",
      urdu: "from PKR 5,000",
    },
  },
};

export const isFilled = (v: string | null | undefined) => !!v && !/^\[.*\]$/.test(v.trim());

export const waLink = (message: string = site.defaultMessage, number: string = site.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const igLink = (handle: string) => `https://instagram.com/${handle.replace(/^@/, "")}`;

export const slides = [
  { key: "cafe", label: "Cafés", alt: "Warm café interior with tables and hanging lights", img: site.images.cafe },
  { key: "restaurant", label: "Restaurants", alt: "Restaurant dining room with set tables", img: site.images.restaurant },
  { key: "gym", label: "Gyms", alt: "Gym floor with weights and training equipment", img: site.images.gym },
  { key: "salon", label: "Salons", alt: "Salon with styling chairs and mirrors", img: site.images.salon },
  { key: "clinic", label: "Clinics", alt: "Clean clinic reception area", img: site.images.clinic },
  { key: "boutique", label: "Boutiques", alt: "Boutique with clothes on display rails", img: site.images.boutique },
] as const;
