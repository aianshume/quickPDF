/**
 * Zoom in Zoom out
 */

import { Editor } from 'grapesjs'
import customSaveModal from "./modal"

export default (editor: Editor, opts = {}) => {
  const dc = editor.DomComponents
  const id = 'block-adder'
  const htmlLabel = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
  `

  function styleToString(style) {
    return Object.keys(style)
      .map(prop => `${prop}: ${style[prop]};`)
      .join('\n');
  }

  dc.getTypes().forEach((elType) => {
    let { model: oldModel, view: oldView } = elType
    console.log(JSON.stringify(elType))
    dc.addType(elType.id, {
      model: oldModel.extend({
        initToolbar() {
          oldModel.prototype.initToolbar.apply(this, arguments)
          const toolbar = this.get('toolbar')

          if (!toolbar.filter((tlb) => tlb.id === id).length) {
            toolbar.unshift({
              id,
              command: function () {
                let modal = customSaveModal(editor);
              },
              label: htmlLabel
            })
            this.set('toolbar', toolbar)
          }
        }
      }),
      view: oldView
    })
  })
}