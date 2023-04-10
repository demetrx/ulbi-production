export enum ArticleCategory {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}

export type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  category: ArticleCategory[]
  blocks: ArticleBlock[]
}
