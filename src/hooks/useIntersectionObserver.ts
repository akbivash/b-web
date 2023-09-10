import React, { useEffect, useState } from 'react'

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>) => {
  const [state, setState] = useState<IntersectionObserverEntry>()

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([elementState]) => setState(elementState), {
      root: null,
      rootMargin: '0px',
      threshold: 1
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return state
}

export default useIntersectionObserver
