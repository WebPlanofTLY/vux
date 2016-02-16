export default {
  props: {
    prisine: true,
    touched: false,
    valid: true
  },
  created: function () {
  },
  computed: {
    dirty: function () {
      return !this.prisine
    },
    invalid: function () {
      return !this.valid
    }
  },
  methods: {
    setTouched: function () {
      this.touched = true
    }
  },
  watch: {
    value: function (newVal) {
      if (this.prisine === true) {
        this.prisine = false
      }
    }
  },
  data: function () {
    return {
      errors: {}
    }
  }
}