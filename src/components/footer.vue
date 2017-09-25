<template>
	<div class="footer">
			<a href="javascript:;" v-for="(item,index) in footerList" class="item" :class="{active:index == indexNum}" @click="itemClick(index)">
				<i class="i-0" :class="'i-'+item.id"></i>
				<span>{{item.text}}</span>
			</a>
	</div>
</template>
<script>
export default {
  name: 'doubai',
  data () {
    return {
      indexNum:0,
      footerList:[
      	{
      		id:0,
      		text:'首页',
      	},
      	{
      		id:1,
      		text:'书影音',
      	},
      	{
      		id:2,
      		text:'广播',
      	},
      	{
      		id:3,
      		text:'小组',
      	},
      	{
      		id:4,
      		text:'我的',
      	},
      ]
    }
  },
  methods : {
	itemClick(index) {
        this.indexNum = index;
    }
  },
}
</script>
