import { Subject, interval } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

export default {
  name: 'Form',
  components: {},
  props: [],
  data () {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 2)
    return {
      dateRange: {startDate, endDate},
      subject: new Subject(),
      url:'./assets/apis/data.json',
      user:{
        name:'Erikson',
        cell:'',
        email:'',
        ps:'',
        del:'input with button',
        city:'台中',
        switch1:false,
        switch2:true,
        switch3:false,
        switch4:true,
        start:'2021/01/04',
        end:'',
        start_time:'10:20',
        end_time:'11:30',
        dateRange:'',
        text:'Hello erikson chen',
        rangeSingle:'38',
        rangeDouble: '25,67',
      },
      citySelect:[ '台北', '台南', '台中' ]
    }
  },
  filters: {
    date(val) {
      return val ? val.toLocaleString() : ''
    }
  },
  computed: {

  },
  watch: {
    'user.rangeDouble':function(val){
      console.log(val)
    },
  },
  mounted () {
    this.axios.get(this.url).then((response) => {
      console.log(response.data)
    })
    $('.card-body [data-toggle="tooltip"]').tooltip({
      trigger : 'hover'
    })
  },
  methods: {
    delBtn: function () {
      this.user.del='';
    },
    dateFormat (classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date()
      }
      return classes
    },
    sendBtn:function () {
      console.log(this.user)
    },
    updateValues:function(val){
      console.log(val)
    },
    checkOpen:function(){
      console.log('check open')
    }
  },
  beforeDestroy: function() {
    this.subject.next();
    this.subject.complete();
  }
}
