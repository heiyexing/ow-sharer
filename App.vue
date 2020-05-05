<script>
	import { tryShowLoading, tryHideLoading } from "./utils/loading.js"
	export default {
		onLaunch: async function() {
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import "./plugins/colorui/icon.css";
@import "./plugins/colorui/main.css";
@import "./static/icon/iconfont.css";
page {
  height: 100%;
  overflow-y: auto;
  background: $uni-bg-color-grey;
  button {
	  font-size: 30upx;
  }
  .bg-yellow {
	  color: white;
  }
}
</style>
