import { getData, toast } from './components/fetch.js';
import patientModal from './components/patient-modal.js';

const app = new Vue({
  el: '#vue',
  components: {
    'patient-modal': patientModal,
  },
  data: {
    title:'長照中心 Dashboard',
    url:'../../api/room-list.json',
    bedurl:'../../api/bed.json',
    description:'',
    roomList:[],
    isPatientModal:false,
    patient:{},
  },
  computed: {
  },
  mounted: function(){
    toast.init(this.notifyClick);

    Rx.Observable.from(getData(this.url))
    .switchMap(res=>{
      this.roomList = res
      return res;
    })
    .subscribe(room => {
      room.beds.map(ele => {
        ele.roomId = room.roomId;
        return ele;
      })
      .filter(x => x.status === '03')
      .map(bed => {
        this.setStatus(bed);
      })
    })

    const interval = Rx.Observable.interval(3000).take(1);
    const changeStatus = interval.switchMap(x => {
      return Rx.Observable.from(getData(this.bedurl))
    });
    changeStatus.subscribe(tar => {
      
      Rx.Observable.from(this.roomList)
      .switchMap(list => list.beds)
      .filter(bed => bed.id===tar.id)
      .subscribe(bed => {
        bed.status = tar.status;
        bed.name = tar.name;
        this.setStatus(bed);
      });
      
    })

  },
  methods:{
    sendPatient:function(){

    },
    setStatus:function(bed){

      if(bed.status !== '03'){
        return;
      }
      const time = dayjs().format("YYYY/MM/DD HH:mm");
      bed.time = time;
      toast.alert(`異常警告！`, `發生時間：${time}<br>${bed.roomId} 病房「${bed.name}」狀態異常，請儘速派人處理!`);
    },
    isOneRoom:function(room){
      return room.beds.length<2;
    },
    setImg:function(num){
      switch (num) {
        case "00":
          return 'empty'
          break;
        case "01":
          return 'sleep'
          break;
        case "02":
          return 'out'
          break;
        case "03":
          return 'fall'
          break;
        case "04":
          return 'timeout'
          break;
        default:
        return 'empty'
          break;
      }
    },
    setStatusText:function(num){
      switch (num) {
        case "00":
          return '無'
          break;
        case "01":
          return '在床'
          break;
        case "02":
          return '離床'
          break;
        case "03":
          return '跌落'
          break;
        case "04":
          return '離床超時'
          break;
      
        default:
        return '無'
          break;
      }
    },
    showPatientModal:function(bed){
      if(bed.status==='00'){
        return;
      }
      this.patient = {...bed};
      this.isPatientModal = true;
    },
    block:function(text="loading...", ele=$('html')){
      ele.block({
        message: `<div>${text}</div>`
      });
    },
    unblock:function(ele=$('html')){
      ele.unblock();
    }
    
  }
})
