/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  snippet: string;
  content: string;
  type: 'image' | 'video' | 'audio' | 'standard';
  views: number;
}

export interface Comment {
  id: string;
  authorName: string;
  avatar: string;
  content: string;
  date: string;
}
