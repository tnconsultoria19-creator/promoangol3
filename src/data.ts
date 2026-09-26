/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Post, Comment } from './types';

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    title: 'How To Become Better With Building In 1 Month',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg7Ugufwjck4hgZodzmRVqD5mAVsy1bk11KSydzVF0fGILd4MnEfkSfBchHuuv3VpTeQonWtMaQW0FOanm-hHdW5qBpIe3Oq8n6PD6MMoyztV3P5kPA4IG2EvQkMppaBO1J4WfVgRLqgyGM1-qQsriUqrHVUbt7fcDMptGfDuJ6cxxkd6jOKZd27N1n3CSEgSDLHGW31VnNT5CKmSWXOmNpZ3b9-eQeeFUz4GxL17oXFfhIckcFrIT',
    category: 'Lifestyle',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGSwc4vrZIapu1Ehr6j6UknXDW7KXGsmAfnznPMojicFqrTghWxwwY_hkxHPTWlfhcx9qcCMuz3VrvclhXX3b1_v0k9kboAo32GYtOv3L-9BHVSFOjjU-RkInF1eE37_0xULqHO1Nf5_e1y1uC_X61Yp9Tw40Vgndu8SbKBKCdqAiQCPi8LB-3xKbyxnag3oPeRtLkgOBGutZiM5ShBRIe5mK18VryKZNPvkha-4h2aQQqh9m-PTh'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence. The architecture of modern structures has always fascinated me. In this article, we dive deep into the daily habits, sketching techniques, and geometric principles that can elevate your building design skills in just thirty days of consistent practice.

Improving your layout and visual composition starts with a fundamental understanding of golden ratios, negative space, and material choices. Over the course of the month, we will look at structural examples from leading global architects, perform daily 15-minute blueprint sketching exercises, and dissect how to build structures that are both aesthetically supreme and functionally robust. Join me on this creative journey to transform your architectural perspective.`,
    type: 'image',
    views: 1240
  },
  {
    id: 'post-2',
    title: 'Most Important Thing You Need To Know About Swim',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiYZUFqiiXmiV1_d_hEdu_FbxKH5qItOXEHyC589shO0okuObf9C72B0DgKiDQwXSnqAk_TnnoYweSVzSUUS-p8aFG1IyLr2kUEUjallER6HujGoUe7IY6C7KdrrirPG2dASq6avYF_O8QZjAjac_RfYhVct8PnTs_FS0-qhBu0qjOnKTZHx1W3J09Q0Fdfi-1VRh52pFhUfDSrOHGcKL7J_Z6n26Uqnb1mPJ-JlLQV8kSYifBTPre',
    category: 'Inspiration',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4DhP4ceezP3e7ekqfhhr3JsvDDJraY6IhjfxKUD969IpQD8-U3_D3xAem78Tn7sNa_lTx1cYYE2QRx_CA7R5ry-UuApXjZiVFRzPszSUyZFJX5AFvaT_Pm1jvyrHgRi6dj64cM-4yfeQsWJEKw1k8AqQjkXDlC7FJ3xT_B5qeYPTqMf9pnMjnYd457AmThOGhvBG_WIfhFN3eFtI6Rp44Z-VIlw0fbg59vpW3BbPHYf3shFzVVOxm'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Swimming in open water is as much a mental challenge as a physical one. Here we explore the essential safety measures, breathing rhythms, and navigation skills required to conquer open lakes and seas.

Many professional athletes highlight that the first step to successful open-water swimming is calming the mind. The cold temperatures and vast depths can easily trigger panic, which ruins your streamline form. We detail breathing exercises to master on dry land, techniques for spotting landmarks while maintaining a steady forward stroke, and optimal gear choices for any weather conditions. Read on to inspire your next aquatic adventure with expert tips.`,
    type: 'standard',
    views: 940
  },
  {
    id: 'post-3',
    title: 'The Secrets To Finding Class Tools For Your Dress',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCge5jX3PYhjjFTkZdmJ8H4Yrs_ZWXAhLFc7HgY4cTquakwkqVIRnN5sxBIrOqwJ2ItLoeZPfJLu01XeAV6jMJK6Xox61B9dvRbAcYk41CEKtb_obHT3OsRc5ftbMILwcL2NLi66Ni70DnfDRv_YHGAbMN8IbuCD8CBBswzjkZ3ukAepbadY5u-M0WsYfT-khtxV4YMxQ2AqJ_0V3ADfzWXJvWhbOkBb85c1BsVbhfOvlwsFI_WKvxT',
    category: 'Fashion',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWUQfgFB8l7ZqfKSQK3VLFF6_2MEtTHvI9uMRBXzEMMCSnc2e6sEBBrlQ-5nf_Iznf5WjUs5sbCVxEREjtfYAQOAEkV19jAXVuJavuIo0PmwLywXDrF-6nujkh3U3k1TKBPdodIH4Rnhjo2J-vkwT98IxqdWONNfUloDLCEJKcM7_igpsmPYpGYyNhIDK0GlbqhPJ5Uwgmz2iFtY9jV6kE9z-WNRttjaZiaPYtENnpMfUcfuX-lVYG'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Finding the perfect silhouette involves understanding textiles, tools, and construction techniques. Learn how to source high-end tailoring equipment and fabrics that elevate any wardrobe project to masterclass quality.

Tailoring is an art form of extreme precision. Simple items like tailor’s chalk, steel pins, and high-carbon scissors make an absolute difference when cutting expensive textiles. This guide introduces you to specialized haberdasheries, teaches you how to identify top-grade organic wool and linen, and highlights structural patterns that guarantee your custom dresses will drape beautifully and stand the test of time.`,
    type: 'standard',
    views: 1820
  },
  {
    id: 'post-4',
    title: 'How I Improved My Fashion Style In One Day',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsyivG7-9BFgtKYPjKPVG04WIQKPLx346oNJpSu7cEgXmzAJWUBjWUAjRwVJ8rD0JHgMH47oGdrMQsdUQZMBDpkvlPkbbLrlGmO7PBh7ITXMB_1mU1IiX_G2b_OalRRVHgSwi1hJi0CydvktYg0L1YLfAiQqnJG7Kf6Ens5mdJ-UDugjxTQLK4HdYaNJ2ZWWjLiIHVqlO9VjSZVSvgw8OyyWbHAfL_JF77p3cMuJG4WfY7mGYvPIV6',
    category: 'Lifestyle',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2CM_Q297YTLkaJ831OXgwWUAbLdv7Vh1k1HnTa-pgYKJ83rEIZhqTcq5fopEZMzcO4kIrekfFAx8TMRXCaGrGz7yFYwl0RNyoozu1dhsct4OzzDWm8XBFEK02L31ASCzoejNuYsF3kP66Acm_GeycE0Xc7L051m5HCEWWIMmyl9mFwLe2KxttOCa6ecdYFb33xhHTHGiREETrWGRuyJv-Vbw3wGslwryRWS8e6viuCZSPdzJJkSVM'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Improving your daily look doesn't require a brand-new wardrobe. By focusing on accessories, proper color matching, and a neat white t-shirt foundation, you can completely redefine your aesthetic presence instantly.

I used to spend hours searching for trendy outfits, only to feel cluttered and mismatched. That all changed when I focused on the basics: fit, posture, and monochrome pairings with a single striking accent color. In this breakdown, we look at the exact schedule of adjustments I did in a single Saturday, resulting in a cleaner presentation, elevated confidence, and an effortlessly sophisticated lifestyle look.`,
    type: 'video',
    views: 3100
  },
  {
    id: 'post-5',
    title: '3 Easy Ways To Make Your iPhone Faster',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVH1DI-I8LeQ908DZVleerY8KMeQf9TILRdepcArP6eBfaW5WWgqO9Ri91fvWmNnzTQhIxKhELSlstOgOfTEJXkqudGMZq1o2QslVrggsJbIuF3_F8BAH0ppzBOFyQ0Nvtoh-Les_oh7n78hP-0Hp4AQwVrfmhTWU9JoWZcJZ0oomLvsgt5XtcZ2vaLq2wu9wH1JE-nik8Nts2UfquPkQKDh3-UeZb2nbCaV-ugWSiXODqooZ6YcY2',
    category: 'Trending',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIc_ewW6oKV4SScA1vkaVfwAY3feHlxEFkXis4fKNXtzq09Xoa2MkyGOZI8difKzgZ_4VMH1eCCo9u5g198gyws0N2qnBmMnCLwVGxadnyg0oNhZncwFvnrKmxfFOnGGKCXxSCkr3sfEBrZSkCwSJ53feZpsQNbYcU4o4Ngn85RXoKGTr_l7NsgkLjSwaPu1cpz1YHs7om0QA2lt6Xidg9FkX87ZAQl8fOBDewmNSqr0MqkiasAko'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Over time, even the newest devices accumulate redundant cache files, system logs, and storage clutter. We cover 3 simple methods—clearing RAM, managing background app refresh, and clean storage cycles—to regain peak speed.

Our phones are extensions of our workflows, and slowdowns are extremely frustrating. You don't need to upgrade your handset to restore its original snap. First, we show you the hidden button shortcut to instantly purge system RAM. Next, we audit which third-party apps are draining your processor in the background. Finally, we implement a simple media storage system to archive heavy photos to cloud backups seamlessly.`,
    type: 'standard',
    views: 5410
  },
  {
    id: 'post-6',
    title: 'Wondering How To Make Your Hair Style Rock?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl2HdIv4rvZkXs7A0wwVK0EFwtjYBsLWPol3C1CKQuayaE_1WtLfdCzZ3_HBJMZF5J5cXdcDh-2bN859cdEIImmDfnd1FOlrBSihApWjLdkXO0S-QTIksoChkEVcvxOl85nZGYth2ecR8Ws0VhfJDJCoSbWWZzQep4dKYBfjGF2Wce3NS-su9O9V0zvB-OmbVwfwWQKa7oIoHIZ4dDbLEiJLQ30SpOdcs9aJxtV9gkGvtU0norAaYy',
    category: 'Fashion',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0KxWChura6pyQgsLhD-zzeWMu3uL901ESLY_dv5jgBkGy0UZBABUgZiEFaGNTY69iS0gT8HrwB0A32Xek6Z7n3zQxBWO8JPwJFk9BUp1UscXhaNVM4NrdOUmYYGjWUi6xG_Q8HdQtPscnqhvJn2bcRPaZq1KkEUZssnUUFk2oqd_PgpVkpLwu8kid3b0mi46Lv8UCDZ6dgXRQIkYvSh2PNixpqQQ7F3sBKnJsUunzvxFmZCGKQZou'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Your hairstyle is a signature statement. Understanding face shapes, styling pomades, and finding the right professional barber are the top ingredients to crafting a look that consistently turns heads.

The difference between a generic haircut and an exquisite style comes down to communication and symmetry. By studying standard facial dimensions, we teach you how to select pomades, clays, or sea-salt sprays tailored to your hair density. We also provide a cheat-sheet to bring to your next barber session, ensuring you get exactly the texture, taper, and volume you envision.`,
    type: 'standard',
    views: 1190
  },
  {
    id: 'post-7',
    title: 'How To Make More Construction By Doing Less',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3FmcKsUnoDjWTpsH8UWep7CxvDtr_Vdjuiit3iBlQoFhasI6SMenx-VwhcuzFkVfMKtFfEiWlFubBw1-Mg3urOxg4Si8IXFF-10_RS2uVToEACBkj0A1tabz8wJpQP2iT77Zf2gY4Im-cjgKn-RDDdo2duF4CEGB4eVKJesatflcDgfLMNzL3CGLtx6VnbFKAQbnrYBeDWuXYvU-nm2sCylK0xszmaQw0k-BqSHBffQc3g-eEjbur',
    category: 'How To',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy-3Z-iutA34R36NkIfpZ2uCCpp7CCOmqyhhiA_1RQprx4-3nppM2fTdlTdrPDGgb6NXgqyxDQjJ9pI9S2DjvubBRGuTekRmql8GLPrkiQFqTupd_cK9D4CJzjXLlagEtCW4wbdn7B3usNVrZAxtrN6SEbTRuvCB4tFBsDAStTZdGM9reDXosfKe2voyxt364GHU-wdUgQpQTnkxLIXGAKwizvCP9UzISMzZBPDYqtW8DAeiD67hJM'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Efficiency in design is the hallmark of modern architecture. Learn how subtraction, passive lighting, and optimized local materials can help builders construct durable, magnificent spaces with fewer resource overheads.

In a hyper-active development landscape, minimal and lightweight structures offer a relief. By removing excessive partitions and focusing on high-grade prefabricated pillars, you allow natural airflows and light to take over. This piece highlights five successful ecological builds where builders reduced material inputs by 30% while amplifying open-space volume and occupant happiness.`,
    type: 'image',
    views: 2040
  },
  {
    id: 'post-8',
    title: 'An Incredibly Easy Method That Works For All',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxjGkXGkDIS6h_KaSW6vIcBVpl3-VAUW-pIIwsLNx9kBDHzDiQqhUK0bdt8PWYEaAEcswTxl32MTbaZJalMOLYy44jaUI0c3JW1f3lZ0gFSovIXMQN_7mCbikO5c_Ap36JeqC-ivsiOfEX2jq8FhO3oK-y4u9aQbsSqYWMyGaNkNm1USaZeU_FzSMxLi6buSUBTbTuZvEfzbxs37Wd1rVovMmw59Som77PFqNvvfyp02vY_3yTwxeb',
    category: 'Culture',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyAepAgad1scj9jbvB-pNgxRvbL3FwLYF249jkOrxjRNfjXznXUqqB76eM0fqnGDdHZ-IAyQajCRRltmnhA6WIttwDrFxNh-7xpx5aKKL88-FFQ8DJ9EiWnrEVi_wuFskNVgKj1ZXN16kZLbS9VuRERq3DIlzF6gJFkp1BD4S_XlmMxd09v93-FYo_ITWMvcCyaSvLYjatRlav8y7ffXEZNK50XYm0hcHHE4tGWTUL38L4BVfOKO7X'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Mindfulness and daily structure can sound overwhelming. But by adopting a tiny micro-habit workflow, you can secure deep daily tranquility and absolute focus without exhausting your willpower reservoirs.

The secret to personal development is avoiding grandiose transformations that crash on Tuesday morning. Instead, try the "two-minute anchor" protocol: connect a tiny habit (like writing one sentence of gratitude) to an existing anchor (such as your morning espresso). This routine slowly shapes your lifestyle identity, ensuring permanent personal improvement with near-zero initial willpower friction.`,
    type: 'standard',
    views: 1980
  },
  {
    id: 'post-9',
    title: '10 Ways To Immediately Start Selling Furniture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOf5osk1Jd3QImNx22ildyblqjg3hFg_ILgKRbF5U6aoXjgffLE9TTfBOa5faI-pdNqtluULLKcIHkALXz7kPBqEyXtSb8FYlk2z9osVxZxamRBhfS1Bz54NU50dVvnAy1FN2faHz4R82Ja-zGXCr32oVpca8kDT2nCEplMChP7CQszdUIz0d4P_QQNZ9fK90V490x6VmiKtTyTxDNQCAj4NHEhJsoijbuWpBo9dd_IlhXRE-wr5sM',
    category: 'Inspiration',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDCFrmsS_c63INoeWBLTnZUQNOR6oiOQZwLwiHL-_zRYGxuBisF2qUXvVmFFbwRjRnc3NVtYPZdPmrf8RFrKW-lsy_-b6Ps0qcrOO_c9F00vzu7D3m4zBMBHowJvSdeeYR6lhQj5Z4H-nsf-ZRDfzUWW8bBG24EPN_v6iGTtZR5htUbsl3j0ffm-6e_wNi1NQE96eQIQC5ctTwiQwEsrevhjpWbWSeDTuhBGPrLip_pQaeL2t-4Bxs'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Starting a custom furniture business can feel daunting. But using digital marketplaces, staging high-contrast photography, and focusing on sustainable woodcraft, you can establish an active customer base in days.

The global demand for heirloom-quality, hand-built wooden furniture has never been higher. If you have an empty garage, basic chisels, and a passion for design, you can launch a profitable enterprise. We discuss finding local suppliers for reclaimed oak, staging elegant outdoor photoshoots to list on social marketplaces, and writing high-converting item descriptions that appeal directly to luxury collectors.`,
    type: 'standard',
    views: 4500
  },
  {
    id: 'post-10',
    title: 'Now You Can Have Your Thoughts Done Safely',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvHR0_5P2EPYme5nMp2xfZnouJPB0C4-r35Ev2GcxxmGba5Kb4W_2_8gHDYD-kNvKqzE-bRjBkjPX-5pejMtXZ9lmpxEavo9vL7cnWvRfd_LYn9-SBS1f92vX4EtDjyU14bb1UB57a1J7Dg6Ivuk8ARQCO6Me1YfLoncdSXc9yvTdTKmC010pn6uNvvcXdJhkmUkpTUqethMnd3yoREWDYrp1-66Qx24v9YD4CYctnb2iFj4NntSN0',
    category: 'Lifestyle',
    author: {
      name: 'Katen Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCorMWuUV4myTbYdD8ufyfjjNaOCdGdlk9EXTHgtE9gXJmfoXX3aR8geWfQvbQdFCXfNCqead78wqYOKx6wxPRCtG_lWaLWv5MqFXSEeNokrk9Etl-H_Kulm99LeOdWJ4v3VxYuDtWdzEQ7YZiDn6EhGGb30I1GABWlHBbbUDhTjiBsOytp59vZEEVt3mB02_3TyktA9gdqodSgIRcMC8uZ_YjyBIewByR8vaLKvfkDLVAWmqkTqptE'
    },
    date: '29 March 2021',
    snippet: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    content: `Journaling is a powerful therapy tool. By securing a private offline digital diary or locked writing routine, you can safely outline complex dreams, challenges, and thoughts without external interference.

In a hyper-connected world where everyone is shouting for attention, we often lose our internal dialogue. Writing your thoughts down without censoring yourself is a deep, psychological release. This masterclass article covers setting up safe physical writing triggers, organizing digital entries securely, and techniques to prompt your deep creative subconscious for clearer, anxiety-free days.`,
    type: 'audio',
    views: 2900
  }
];

export const initialComments: Record<string, Comment[]> = {
  'post-1': [
    {
      id: 'c1',
      authorName: 'Sarah Jenkins',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4DhP4ceezP3e7ekqfhhr3JsvDDJraY6IhjfxKUD969IpQD8-U3_D3xAem78Tn7sNa_lTx1cYYE2QRx_CA7R5ry-UuApXjZiVFRzPszSUyZFJX5AFvaT_Pm1jvyrHgRi6dj64cM-4yfeQsWJEKw1k8AqQjkXDlC7FJ3xT_B5qeYPTqMf9pnMjnYd457AmThOGhvBG_WIfhFN3eFtI6Rp44Z-VIlw0fbg59vpW3BbPHYf3shFzVVOxm',
      content: 'Absolutely stellar tips! I’ve been sketching blueprints for a week now and my perspective has totally changed.',
      date: '30 March 2021'
    },
    {
      id: 'c2',
      authorName: 'Michael Chang',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGSwc4vrZIapu1Ehr6j6UknXDW7KXGsmAfnznPMojicFqrTghWxwwY_hkxHPTWlfhcx9qcCMuz3VrvclhXX3b1_v0k9kboAo32GYtOv3L-9BHVSFOjjU-RkInF1eE37_0xULqHO1Nf5_e1y1uC_X61Yp9Tw40Vgndu8SbKBKCdqAiQCPi8LB-3xKbyxnag3oPeRtLkgOBGutZiM5ShBRIe5mK18VryKZNPvkha-4h2aQQqh9m-PTh',
      content: 'Can you recommend any specific tools or books for geometric ratios? Thanks for the write-up!',
      date: '31 March 2021'
    }
  ],
  'post-2': [
    {
      id: 'c3',
      authorName: 'Elena Rostova',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGSwc4vrZIapu1Ehr6j6UknXDW7KXGsmAfnznPMojicFqrTghWxwwY_hkxHPTWlfhcx9qcCMuz3VrvclhXX3b1_v0k9kboAo32GYtOv3L-9BHVSFOjjU-RkInF1eE37_0xULqHO1Nf5_e1y1uC_X61Yp9Tw40Vgndu8SbKBKCdqAiQCPi8LB-3xKbyxnag3oPeRtLkgOBGutZiM5ShBRIe5mK18VryKZNPvkha-4h2aQQqh9m-PTh',
      content: 'This open-water swim guide came at the perfect time. I have a lake triathlon next month!',
      date: '29 March 2021'
    }
  ]
};
