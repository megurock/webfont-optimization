new Vue({
  el: '#app',
  template: `
    <div class="app">
      <div class="app-ui">
        <select class="font-set-selector" @change="onFontSelectorChange">
          <option v-for="(range, index) in ranges" :key="index">Font Set {{ranges.length - index - 1}}</option>
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
  data: {
    showInput: false,
    selectedRangeIndex: 0,
    ranges: ranges.reverse(),
  },
  computed: {
    range: function() {
      return this.ranges[this.selectedRangeIndex]
    },
    output: function() {
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
    onFontSelectorChange: function(event) {
      this.selectedRangeIndex = event.currentTarget.selectedIndex
    }
  }
})