<!--
 * @Date: 24/04/2021 11.12.52 +0800
 * @Author: KnowsCount
 * @LastEditTime: 24/04/2021 14.51.39 +0800
 * @FilePath: /vue-lib/src/lib-components/favourite-button.vue
-->

<template>
	<div>
		<button class="favorite-button" @click="starJump">
			<div class="icon">
				<div class="star"></div>
			</div>
			<span>Favourite</span>
		</button>
	</div>
</template>

<style lang="scss" scoped>
.favorite-button {
	--background-default: #313440;
	--text-color-default: #FAFBFF;
	--star-color-default: #62677C;
	--star-face-color-default: #1F2128;
	--star-color-active: #F6C206;
	--star-face-color-active: #845901;
	--star-hole: #16181E;
	--star-hole-inner: #20232C;
	--button-y: 0px;
	--star-y: 0px;
	--star-scale: 1;
	--star-rotate: 0deg;
	--star-hole-scale: 0;
	--star-face-scale: 1;
	--text-x: 0px;
	--text-o: 1;
	-webkit-tap-highlight-color: transparent;
	-webkit-appearance: none;
	outline: none;
	border: none;
	background: none;
	min-width: 125px;
	padding: 12px 24px 12px 16px;
	margin: 0;
	font-family: inherit;
	font-size: 14px;
	font-weight: 500;
	line-height: 19px;
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	color: var(--text-color-default);
	transform: translateY(var(--button-y)) translateZ(0);
	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		border-radius: 9px;
		transition: transform .2s;
		transform: scale(var(--background-scale-x, 1), var(--background-scale-y, 1)) translateZ(0);
		background: var(--background-default);
	}
	&:active {
		--background-scale-x: .98;
		--background-scale-y: .96;
	}
	span {
		display: block;
		opacity: var(--text-o);
		transform: translateX(var(--text-x));
	}
	.icon {
		width: 36px;
		height: 119px;
		display: flex;
		pointer-events: none;
		position: relative;
		clip-path: ellipse(150% 50% at 50% 50%);
		margin: -100px 2px 0 -8px;
		&:before {
			content: '';
			margin-top: auto;
			display: block;
			width: 36px;
			height: 12px;
			background: var(--star-hole);
			box-shadow: inset 0 3px 0 0 var(--star-hole-inner);
			border-radius: 100px / 30px;
			transform: scale(var(--star-hole-scale));
			transform-origin: 50% 100%;
		}
		.star {
			width: 20px;
			height: 19px;
			position: absolute;
			left: 8px;
			bottom: 0;
			transform: translateY(var(--star-y)) rotate(var(--star-rotate)) scale(var(--star-scale));
			border-radius: var(--star-radius, 0px);
			background: var(--star-color, var(--star-color-default));
			clip-path: var(--star-clip, polygon(10px 0, 13px 6px, 20px 7px, 15px 12px, 16px 19px, 10px 15px, 4px 19px, 5px 12px, 0 7px, 7px 6px));
			transition: clip-path .2s, border-radius .2s, background .2s;
			&:before,
			&:after {
				content: '';
				position: absolute;
				background: var(--star-face-color, var(--star-face-color-default));
				transition: background .2s, box-shadow .2s;
			}
			&:before {
				width: 2px;
				height: 2px;
				border-radius: 50%;
				left: 7px;
				top: 8px;
				box-shadow: 4px 0 0 0 var(--star-face-color, var(--star-face-color-default));
				transform: scaleY(var(--star-face-scale));
			}
			&:after {
				width: 4px;
				height: 2px;
				border-radius: var(--star-face-radius, 2px 2px 0 0);
				left: 8px;
				top: 11px;
				transition: border-radius .2s;
			}
		}
	}
	&.star-round {
		--star-clip: polygon(10px 0, 20px 0, 20px 7px, 20px 12px, 20px 19px, 10px 19px, 0 19px, 0 12px, 0 7px, 0 0);
		--star-radius: 50%;
	}
	&.active {
		--star-color: var(--star-color-active);
		--star-face-color: var(--star-face-color-active);
		--star-face-radius: 0 0 2px 2px;
	}
}

html {
	-webkit-font-smoothing: antialiased;
}

* {
	box-sizing: inherit;
	&:before,
	&:after {
		box-sizing: inherit;
	}
	font-family: 'Inter', Arial;
	box-sizing: border-box;
}
</style>

<script>
import gsap from 'gsap'

export default {
	name: "favourite-button",
	methods: {
		starJump () {
			document.querySelectorAll('.favorite-button').forEach(button => {
				button.addEventListener('click', e => {
					e.preventDefault()

					if(button.classList.contains('animated')) {
						return
					}
					button.classList.add('animated')

					gsap.to(button, {
						keyframes: [{
							'--star-y': '-36px',
							duration: .3,
							ease: 'power2.out'
						}, {
							'--star-y': '48px',
							'--star-scale': .4,
							duration: .325,
							onStart() {
								button.classList.add('star-round')
							}
						}, {
							'--star-y': '-64px',
							'--star-scale': 1,
							duration: .45,
							ease: 'power2.out',
							onStart() {
								button.classList.toggle('active')
								setTimeout(() => button.classList.remove('star-round'), 100)
							}
						}, {
							'--star-y': '0px',
							duration: .45,
							ease: 'power2.in'
						}, {
							'--button-y': '3px',
							duration: .11
						}, {
							'--button-y': '0px',
							'--star-face-scale': .65,
							duration: .125
						}, {
							'--star-face-scale': 1,
							duration: .15
						}],
						clearProps: true,
						onComplete() {
							button.classList.remove('animated')
						}
					})

					gsap.to(button, {
						keyframes: [{
							'--star-hole-scale': .8,
							duration: .5,
							ease: 'elastic.out(1, .75)'
						}, {
							'--star-hole-scale': 0,
							duration: .2,
							delay: .2
						}]
					})

					gsap.to(button, {
						'--star-rotate': '360deg',
						duration: 1.55,
						clearProps: true
					})
				})
			})
		}
	}
}
</script>