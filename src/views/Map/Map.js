import SelectComponent from "@/components/form/SelectComponent.vue"

export default {
  name: 'map-page',
  components: {
    'sp-select': SelectComponent
  },
  props: [],
  data () {
    return {
      url:'./assets/apis/point.json',
      zoom:10,
      areaArray:[],
      all:{},
      tarArea:'',
      map:null,
    }
  },
  computed: {

  },
  watch:{
    tarArea:function(val){
      const latlng = val.split(',').map(x => +x);
      this.map.setCenter({ lat: latlng[0], lng: latlng[1] }, this.zoom);
    }
  },
  mounted () {
    this.axios.get(this.url)
    .then(res => res.data)
    .then(res => {
      this.areaArray = res.area.map(x => {
        return {
          value:x.latlng.join(),
          text:x.name
        }
      })
      this.zoom = res.zoom
      this.all = res.all
      this.setMap(this.all.latlng, this.zoom);
    })
  },
  methods: {
    setMap: function(latlng, zoom){
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: { lat: latlng[0], lng: latlng[1] },
        zoomControl: true,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        // mapId:"f438227f48db4449",
      })
    },
    setMarker: function (latlng) {
      
    }
  }
}
