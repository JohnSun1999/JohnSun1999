import SjEmpty from '/src/components/sj-empty.vue'
import SjNoMore from '/src/components/sj-no-more.vue'

const install = (Vue) => {
    Vue.component(SjEmpty.name, SjEmpty)
    Vue.component(SjNoMore.name, SjNoMore)
}
export default {
    install
}