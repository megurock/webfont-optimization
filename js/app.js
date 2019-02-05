/**
 * App
 */
const App = {
  template: `
    <div class="app">
      <div class="app-ui">
        <select class="font-set-selector" @change="onFontSelectorChange" ref="fontSelector">
          <option v-for="(range, index) in ranges" :value="ranges.length - index - 1" :key="index">Font Set {{ranges.length - index - 1}}</option>
        </select>
        <label class="app-ui__check">
          <input type="checkbox" v-model="showInput">
          <span>Show Input</span>
        </label>
      </div>
      <output class="output app__output">{{output}}</output>
      <textarea class="input app__input" v-if="showInput"></textarea>
    </div>
  `,
  data() {
    return {
      showInput: false,
      ranges,
    }
  },
  computed: {
    selectedRangeIndex() {
      return this.$route.params.index || this.ranges.length - 1
    },
    range() {
      return this.ranges[this.selectedRangeIndex]
    },
    output() {
      return this.range.map((unicodeRange) => {
        const charCode = unicodeRange.replace(/^U\+(.+)/, '$1')
        const fromTo = charCode.split('-')
        const from = fromTo[0]
        const to = fromTo[1]
        if (to) {
          let fromBase10 = parseInt(from, 16)
          const toBase10 = parseInt(to, 16)
          const charCodes = []
          while (fromBase10 <= toBase10) {
            charCodes.push(fromBase10)
            fromBase10++
          }
          return String.fromCharCode(...charCodes)
        } else {
          return String.fromCharCode(parseInt(from, 16))
        }
      }).join('')
    }
  },
  methods: {
    onFontSelectorChange(event) {
      const index = event.currentTarget.value
      this.$router.push({ path: `/${index}`, params: { index } })
    },
  },
  mounted() {
    console.log('idx', this.selectedRangeIndex)
    this.$refs.fontSelector.value = this.selectedRangeIndex
  }
}

/**
 * Router 
 */
const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/:index', component: App }
  ]
})

// startup
new Vue({ router }).$mount('#app')