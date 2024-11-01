import Vue from "vue"
import AppModal from '@/components/AppModal.vue'

export function openModal(
  component,
  props,
  parent,
  modalProps
) {
  return new Promise((resolve, reject) => {
    let propsData = Object.assign(modalProps || {}, {
      resolve,
      reject,
      component,
      parent,
      props: Vue.observable(props),
    })

    const ModalConstructor = Vue.extend(AppModal)
    new ModalConstructor({
      el: document.createElement('div'),
      parent: parent,
      propsData: propsData,
    })
  })
}