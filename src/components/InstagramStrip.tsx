/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Eye, Heart } from 'lucide-react';

const INSTA_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiFUHyRSW9o5oQ96857b-pz2yymN_-aRNe14Y35mIPCy7YsL968Zuxmb-PMkXbmbdFG0xPhzpbuIouLHeXppCPHbVsfHOu-DT-9fcVMvVnegcbVTbuwkZdTXOxHb8dPAGgcfV9IdCTsv1LWteBWIBc5kf4aq1i7Xy51G30akS0zXXb7rxylP3ZITxmzDTu6shU-t2hPW6RGUDwTaTvGzboOVsALzDPEJI0TXMqrgXhTQzXP8huYRwt',
    alt: 'Sunglasses aesthetic',
    likes: 341,
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGnuxW9i95YbeWDlCOtFemqsTMX1ldWHCyTqrYAzjbLIsdmOG5FDePpGFO8ZZf75qeRk6l53qlwyvp5f-rfIXxrnO9frS504w-jTOexrGC2icNnSVSu1nexGyTGNWj5YNJOLd6vP5oyq_OcSTNtjwvjMNsCNl76rdbpSo_vDRRBdQZFJEFVsPixiTC2mE737XFmf8kLDJhVUAxagnIHBXRsfVZwcBo7Dprcdr3AV4MMQ9vioKLB4Vg',
    alt: 'Room interior plant',
    likes: 219,
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkwWZrC_vdxZ3D9xFQuzXUb1WqHGCXw8WOW3DaYT_d5f0ZaWm2j3nF_RAKecKHJZt0OpxVL_UGUfysAUcbXAnu1sXeWnqLnsA0YVZYL_e4RF1IV7sHUALFZiJlzKEio0CW5qTmktBAIUHG1RiU0FsWNNdi4NC0etr98KBq1EYxfDpQl2sB59aTVUKMtzLwOo_oGDREqTj0iRRazw0rosrYedTyITb_53n2Knd0DsceCHwubMNt7XSy',
    alt: 'Hanging lamp modern',
    likes: 412,
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWkVPd9ahpjyH1GzYmDInnAsMZQK9T1kesJqsn4Xa7TWoJFfizuj6vPaWy4-ZtWhimFnEKS2tuKMPfWaXYVilQVxnxZNi1FD8n_-uoFmHZDiwKoMlzwl2m3V-bU9eG_vOuvTBNuw5kWjCup4AAEhnrbg0HGnEFkWjcYKlKWYkTq7pD5yJEv6UJCtFDttPifn6-dRslHl6-VKt271YVE05TO5DQFgjVg-b8Ep-X6uHUsLRO8bnkO5XA',
    alt: 'Guy in white shirt',
    likes: 850,
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0ioeysVO_uGL_rRkFeVz75UXiT5qFkmuY5q1gEBjPrw7hyOys9n3JRxSm9a9KY9CZeh1UsQjGShMwwMz7eotfe30vAbgnysUr-tKfeN13Uu28wvP4O9wYCoPAOdQ6K4KVaCei9Xg3VN6WHsRu-_YqthZN2tPl0iKiO5krjKY4yxSiFGrainI7xiieRhlFrUn3sqBB3WGNknKLzgoK0arz3QfgNTrgi3TbozccaEEoL6uf356SKfOH',
    alt: 'Hanging decor minimalism',
    likes: 290,
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXOk611xcPFRFzU54mqOvo2AWNVg2FFV-0RFMPMoAbA7jdPO0HbKOyaUuFxs1WxjodAaqViJCWLCILkpK_Z_D-tc9NPwGqyesACJfyrSrxlDi6X0O7vC_NLWvCOatXIB3oiahuK16AXCsix0BuP5LrZkaTb3rJQ7WAhAqTr94oU070Unghfz6V3yp78dPJmI2DaPY1JcAajgtzzH5lbBTd9go3bw9SJlnhZOwtrAzcrNx6u56j3P6E',
    alt: 'Portrait photography',
    likes: 671,
  }
];

export default function InstagramStrip() {
  const [activeImage, setActiveImage] = useState<typeof INSTA_IMAGES[0] | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-t border-[#ebebeb]/60 bg-white">
      {/* Floating Center Pill Button */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#fe4f70] hover:bg-[#e03e5e] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform inline-block whitespace-nowrap"
      >
        @Katen on Instagram
      </a>

      {/* 6 Grid Instagram Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full">
        {INSTA_IMAGES.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(img)}
            className="h-44 sm:h-48 overflow-hidden group relative cursor-pointer"
          >
            <img
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src={img.url}
              referrerPolicy="no-referrer"
            />
            {/* Dark Hover overlay with Heart stats */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white space-x-1.5 text-xs font-bold">
              <Heart className="w-4 h-4 text-[#fe4f70] fill-[#fe4f70]" />
              <span>{img.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-xl w-full flex flex-col items-center">
            <img
              src={activeImage.url}
              alt={activeImage.alt}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-white text-center mt-4">
              <p className="text-sm font-semibold">{activeImage.alt}</p>
              <div className="flex items-center justify-center space-x-1.5 mt-2 text-xs text-gray-400">
                <Heart className="w-3.5 h-3.5 text-[#fe4f70] fill-current" />
                <span>{activeImage.likes} Likes on Instagram</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
