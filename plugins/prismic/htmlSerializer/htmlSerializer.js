import prismicDOM from 'prismic-dom'
import linkResolver from '@/plugins/prismic/linkResolver'

const Elements = prismicDOM.RichText.Elements

const linkSerializer = (element, content, linkKey) => {
  const url = prismicDOM.Link.url(element[linkKey], linkResolver)

  if (element[linkKey].link_type === 'Document') {
    return `<router-link to="${url}">${content}</router-link>`
  }
  const target = element[linkKey].target
    ? `target="'${element[linkKey].target}'" rel="noopener"`
    : ''
  return `<a href="${url}" ${target}>${content}</a>`
}

const imageSerializer = (element) => {
  return `<img src="${element.url}" alt="${element.alt || ''}" copyright="${
    element.copyright || ''
  }">`
}

const imageWithLinkSerializer = (element) => {
  let result = imageSerializer(element)

  if (element.linkTo) {
    result = linkSerializer(element, result, 'linkTo')
  }
  const wrapperClassList = [element.label || '', 'block-img']
  return `<p class="${wrapperClassList.join(' ')}">${result}</p>`
}

function htmlSerializer(type, element, content, children) {
  if (type === Elements.hyperlink) {
    return linkSerializer(element, content, 'data')
  }

  if (type === Elements.image) {
    return imageWithLinkSerializer(element)
  }

  return null
}

export default htmlSerializer
