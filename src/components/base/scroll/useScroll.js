import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDOM)
const useScroll = (wrapperRef, options) => {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
  })

  onUnmounted(() => {
    scroll.value.destory()
  })

  return {
    scroll
  }
}
export default useScroll
