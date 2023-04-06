enum ArticleCategory {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}

type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode

export interface Article {
  id: string
  title: string
  subtitle: string
  ing: string
  views: number
  createdAt: string
  category: ArticleCategory[]
  blocks: ArticleBlock[]
}
