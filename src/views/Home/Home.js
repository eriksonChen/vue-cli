export default {
  name: 'home',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    // var tol = $(this.$refs['tooltip-box']);
    $('.card-body [data-toggle="tooltip"]').tooltip({
      trigger : 'hover'
    })
  },
  methods: {

  }
}
