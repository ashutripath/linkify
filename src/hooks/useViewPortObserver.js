import { useState, useEffect } from 'react'

function useIsInsideViewPort(elementRef, options = {}) {
  const [isInsideViewPort, setIsInsideViewPort] = useState(false)

  function intersectionCb(entries, observer) {
    const { isIntersecting } = entries[0]

    if (isIntersecting === isInsideViewPort) return

    setIsInsideViewPort(isIntersecting)

    if (options.onVisibleChange) {
      options.onVisibleChange(isIntersecting)
    }
    if (!options.isPersistent) {
      observer.disconnect()
    }
  }

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsInsideViewPort(true)
      return
    }

    const observer = new IntersectionObserver(intersectionCb, { rootMargin: '0px', threshold: 0, ...options })
    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])

  return isInsideViewPort
}

export default useIsInsideViewPort
