<!--
 * @Date: 25/04/2021 20.40.01 +0800
 * @Author: KnowsCount
 * @LastEditTime: 25/04/2021 20.47.16 +0800
 * @FilePath: /vue-lib/src/lib-components/link-hover.vue
-->

<template>
	<div>
		<p>
			Check out
			<a href="#">
				{{ text }}
				<svg viewBox="0 0 70 36">
					<path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
				</svg>
			</a>
			here
		</p>
	</div>
</template>

<script>
export default {
	name: "link-hover",
	props: {
		text: {
			type: String,
			default: 'the link'
		}
	}
}
</script>

<style lang="scss" scoped>
p {
	--text: #2B3044;
	--line: #BBC1E1;
	--line-active: #275EFE;
	font-size: 18px;
	margin: 0;
	color: var(--text);
	a {
		display: inline-block;
		position: relative;
		text-decoration: none;
		color: inherit;
		svg {
			width: 76px;
			height: 40px;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, 7px) translateZ(0);
			fill: none;
			stroke: var(--stroke, var(--line));
			stroke-linecap: round;
			stroke-width: 2px;
			stroke-dasharray: var(--offset, 69px) 278px;
			stroke-dashoffset: 361px;
			transition: stroke .25s ease var(--stroke-delay, 0s), stroke-dasharray .35s;
		}
		&:hover {
			--stroke: var(--line-active);
			--stroke-delay: .1s;
			--offset: 180px;
		}
	}
}

* {
	box-sizing: inherit;
	&:before,
	&:after {
		box-sizing: inherit;
	}
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	font-family: 'Inter', Arial;
}
</style>