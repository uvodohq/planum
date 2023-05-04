export function isInsideClass(domElement, classOrClassesName) {
  if (!classOrClassesName) return false
  const selector = Array.isArray(classOrClassesName)
    ? classOrClassesName.map((c) => `.${c}`).join(',')
    : `.${classOrClassesName}`

  return !!domElement.parentElement.closest(selector)
}
