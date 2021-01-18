export default {
  name: 'tableComponent',
  components: {},
  props: [],
  data () {
    return {
      table:{},
    }
  },
  computed: {

  },
  mounted () {
    const table_el = $(this.$el).find('table');
    this.table = this.setTable(table_el);

  },
  methods: {
    setTable: function(table){
      return table.DataTable({
        // language: {
        //   url: './api/dlang.json'
        // },
        stateSave: false,
        stateDuration: 60 * 60,
        iDisplayLength: 25,
        order: [[0, "desc"]],
        pagingType: 'simple_numbers',
        columnDefs: [
          { className: 'text-center', targets: 0 },
          { className: 'text-center', orderable: false, targets: -1 }
        ],
      });
    },
  },
  beforeDestroy: function() {
    // this.subject.next();
    // this.subject.complete();
  }
}
