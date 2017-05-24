<script type="text/javascript">
	export default {
		name: 'item',
		props: ['result']
	}
</script>
<template>
	<li class="list-li" style="margin-top: 20px;">
		<a href="/detail/58eee565a92d341e48cfe7fc" class="">
			<div class="item item-top">
				<span :class="{top: result.top, tab: result.top}">置顶</span> 
				<span class="title">{{ result.title }}</span>
			</div> 
			<div class="item item-bottom">
				<img :src="result.author.avatar_url" alt=""> 
				<div class="info">
					<div class="base-info info-style">
						<span class="username">{{result.author.loginname}}</span> 
						<span class="createtime"><i class="fa fa-clock-o"></i>{{result.last_reply_at.substr(0,10)}}</span>
					</div> 
					<div class="other-info info-style">
						<span><i class="fa fa-comment-o"></i>{{result.reply_count}}</span> 
						<span><i class="fa fa-eye"></i>{{result.visit_count}}</span>
					</div>
				</div>
			</div>
		</a>
	</li>
</template>