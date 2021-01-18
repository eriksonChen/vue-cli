import { postData, block, unblock, toast } from './fetch.js';
import inputComponent from './form/input-component.js';
export default {
  model: {
    event: ['send', 'close']
  },
  props: {
    patient:Object,
  },
  components: {
    'sp-input': inputComponent,
  },
  template: `
    <div id="patient-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="patientModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">

          <form @submit="sendBtn($event)" method="post">
            <div class="modal-header">
              <h4 class="modal-title m-0" id="addModalLabel">病房 {{patient.roomId}}</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                ×
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12">
                  <h4>床號：{{patient.id}}</h4>
                </div>
                <div class="col-sm-12">
                  <h4>姓名：{{patient.name}}</h4>
                </div>
                <div class="col-sm-12">
                  <h4>目前狀態：<span class="badge badge-pill" v-bind:class="badgeClass">{{status}}</span></h4>
                </div>
                <div class="col-sm-12" v-if="patient.time">
                  <h5 class="text-muted">發生時間：{{patient.time}}</h5>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-light" data-dismiss="modal"> Cancel </button>
              <button type="submit" class="btn btn-primary" v-if="patient.status==='03'"> 解除警報 </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  `,
  data: function() {
    return {
      subject: new Rx.Subject(),
      updateUrl:'api/MemberManagement/UpdateMember',
      badgeClass:'',
    };
  },
  computed: {
    status:function(){
      switch (this.patient.status) {
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
    }
  },
  watch: {
    // 'member.name': function(str){
    //   this.member.name = isEmpty(str) ? '' : str;
    // }
  },
  mounted:async function() {
    $("#patient-modal").modal("show");
    $('#patient-modal').on('hidden.bs.modal', e => {
      this.$emit('close');
    })

    this.badgeClass = this.patient.status === '03' ? 'badge-danger' : 'badge-success';
  },
  methods: {
    sendBtn:function(e){
      e.preventDefault();
      block('解除狀態中...', $('#patient-modal .modal-content'));

      const {id} = this.patient;

      setTimeout(() => {
        $("#patient-modal").modal("hide");
        toast.success(`${id} 狀能解除`);
      }, 1000);

      // postData(url, {id})
      // .catch(error => {
      //   unblock($('#patient-modal .modal-content'));
      // })
      // .then(res =>{
        
      //   unblock($('#patient-modal .modal-content'));
        
      // });
      
    }
  },
  beforeDestroy: function() {
    this.subject.next();
    this.subject.complete();
  }
};
