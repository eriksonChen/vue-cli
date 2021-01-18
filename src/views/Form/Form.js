import InputComponent from "@/components/form/inputComponent.vue"
import SelectComponent from "@/components/form/SelectComponent.vue"
import DatepickerComponent from "@/components/form/datepickerComponent.vue"
import SwitchComponent from "@/components/form/SwitchComponent.vue"
import CheckboxComponent from "@/components/form/checkboxComponent.vue"
import dayjs from 'dayjs'
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export default {
  name: 'Form',
  components: {
    'sp-input':InputComponent,
    'sp-select':SelectComponent,
    'sp-datepicker': DatepickerComponent,
    'sp-switch': SwitchComponent,
    'sp-checkbox': CheckboxComponent,
  },
  props: [],
  data () {
    return {
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
      },
      citySelect:[ '台北', '台南', '台中' ]
    }
  },
  computed: {

  },
  watch: {
    'user.switch2':function (val) {
      console.log('user switch2', val);
    }
  },
  mounted () {
    // const times = interval(2000)
    // times.pipe(
    //   takeUntil(this.subject)
    // ).subscribe(res =>{
    //   console.log(res);
    // })
  },
  methods: {

  },
  beforeDestroy: function() {
    this.subject.next();
    this.subject.complete();
  }
}
