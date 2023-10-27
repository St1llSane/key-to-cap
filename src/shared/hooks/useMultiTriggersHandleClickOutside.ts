/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react'

export const useMultiTriggersHandleClickOutside = (
  state: string | null,
  ref: RefObject<HTMLElement> | null,
  handler: (_value: string | null) => void
) => {
  useEffect(() => {
    const isRefObjectContainsTarget = (e: MouseEvent) => {
      return ref && !ref.current?.contains(e.target as HTMLElement)
        ? true
        : false
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // on menu-trigger button click
      if (state === null && isRefObjectContainsTarget(e)) {
        handler(target.innerText)
        // on another menu-trigger button click if we already have active menu
      } else if (
        state &&
        state !== target.innerText &&
        isRefObjectContainsTarget(e)
      ) {
        handler(target.innerText)
        // on outside menu or trigger button click
      } else if (isRefObjectContainsTarget(e)) {
        handler(null)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => window.removeEventListener('click', handleClickOutside)
  }, [handler])
}
