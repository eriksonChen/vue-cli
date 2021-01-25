import InputComponent from "@/components/form/inputComponent.vue"
import SelectComponent from "@/components/form/SelectComponent.vue"
import DatepickerComponent from "@/components/form/datepickerComponent.vue"
import SwitchComponent from "@/components/form/SwitchComponent.vue"
import CheckboxComponent from "@/components/form/checkboxComponent.vue"
import TimepickerComponent from "@/components/form/timepickerComponent.vue"
import dayjs from 'dayjs'
import DateRangePicker from 'vue2-daterange-picker'
import { Subject, interval } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

export default {
  name: 'Form',
  components: {
    'sp-input':InputComponent,
    'sp-select':SelectComponent,
    'sp-datepicker': DatepickerComponent,
    'sp-switch': SwitchComponent,
    'sp-checkbox': CheckboxComponent,
    'sp-timepicker': TimepickerComponent,
    'date-range-picker':DateRangePicker,
  },
  props: [],
  data () {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 2)
    return {
      dateRange: {startDate, endDate},
      subject: new Subject(),
      user:{
        firstName:'Chen',
        lastName:'Erikson',
        ps:'',
        city:'台中',
        switch1:false,
        switch2:true,
        switch3:false,
        switch4:true,
        start:'2021/01/04',
        end:'',
        start_time:'10:20',
        end_time:'11:30',
        dateRange:''
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
    'user.switch2':function (val) {
      console.log('user switch2', val);
    },
    'user.start_time':function(val){
      console.log('start time', val)
    }
  },
  mounted () {
    // const times = interval(2000)
    // times.pipe(
    //   takeUntil(this.subject)
    // ).subscribe(res =>{
    //   console.log(res);
    // })
    console.log(this.$refs.picker);
  },
  methods: {
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
      console.log(val);
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
