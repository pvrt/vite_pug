import 'virtual:vite-svg-2-webfont.css';

// ==================================
// alpinejs
// https://alpinejs.dev/
// ==================================
import Alpine from 'alpinejs'

document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    nav: false,
  }))
})

window.Alpine = Alpine
Alpine.start()

