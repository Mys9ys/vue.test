export default {
    mounted(el, binding){
        console.log(el, binding);
        const options = { // подгрузка следующих элементов
          rootMargin: '8px',
          threshold: 1.0
        }

        const callback = (entries) => {
          if(entries[0].isIntersecting) {
            binding.value()
          }
        }

        const observer = new IntersectionObserver(callback, options)
        observer.observe(el)
    },
    name: 'intersection'
}