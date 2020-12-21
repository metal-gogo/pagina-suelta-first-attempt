/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

function linkResolver(doc) {
  const pagesMap = {
    home: '/',
    book: 'libros',
    author: 'autores',
    publisher: 'editoriales',
  }

  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type in pagesMap) {
    return `/${pagesMap[doc.type]}/${doc.uid}}`
  }

  return '/not-found'
}

export default linkResolver
