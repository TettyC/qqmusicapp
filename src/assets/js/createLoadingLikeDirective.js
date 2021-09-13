import { createApp } from 'vue'

import { addClass, removeClass } from '@/assets/js/dom'

const relativeClass = 'g-relative'

const createLoadingLikeDirective = component => {
  const name = component.name
  const Directive = {
    mounted(el, binding) {
      const app = createApp(component)
      const instance = app.mount(document.createElement('div'))
      if (!el.name) {
        el[name] = {}
      }
      el[name].instance = instance

      const title = binding.arg
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }

      if (binding.value) {
        append(el)
      }
    },

    updated(el, binding) {
      const name = component.name
      const title = binding.arg
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }

      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }

  const append = el => {
    const style = getComputedStyle(el)
    if (['relative', 'fixed', 'absolute'].indexOf(style.position) === -1) {
      addClass(el, relativeClass)
    }
    el.appendChild(el[name].instance.$el)
  }

  const remove = el => {
    removeClass(el, relativeClass)
    el.removeChild(el[name].instance.$el)
  }

  return Directive
}

export default createLoadingLikeDirective
