<!--
 * @Date: 24/04/2021 14.22.02 +0800
 * @Author: KnowsCount
 * @LastEditTime: 24/04/2021 15.07.05 +0800
 * @FilePath: /vue-lib/src/lib-components/paperplane-button.vue
-->

<template>
	<button class="button" @click="changeToPlane">
		<span class="default">Send</span>
		<span class="success">Sent</span>
		<div class="left"></div>
		<div class="right"></div>
	</button>
</template>

<style lang="scss" scoped>
.button {
	--primary: #275EFE;
	--primary-dark: #2055EE;
	--primary-darkest: #133FC0;
	--text: #FFFFFF;
	--text-opacity: 1;
	--success: #2B3044;
	--success-scale: .2;
	--success-opacity: 0;
	--border-radius: 7;
	--overflow: hidden;
	--rotate: 0;
	--plane-x: 0;
	--plane-y: 0;
	--plane-opacity: 1;
	--left-wing-background: var(--primary);
	--left-wing-first-x: 0;
	--left-wing-first-y: 0;
	--left-wing-second-x: 50;
	--left-wing-second-y: 0;
	--left-wing-third-x: 0;
	--left-wing-third-y: 100;
	--left-body-background: var(--primary);
	--left-body-first-x: 50;
	--left-body-first-y: 0;
	--left-body-second-x: 50;
	--left-body-second-y: 100;
	--left-body-third-x: 0;
	--left-body-third-y: 100;
	--right-wing-background: var(--primary);
	--right-wing-first-x: 50;
	--right-wing-first-y: 0;
	--right-wing-second-x: 100;
	--right-wing-second-y: 0;
	--right-wing-third-x: 100;
	--right-wing-third-y: 100;
	--right-body-background: var(--primary);
	--right-body-first-x: 50;
	--right-body-first-y: 0;
	--right-body-second-x: 50;
	--right-body-second-y: 100;
	--right-body-third-x: 100;
	--right-body-third-y: 100;
	display: block;
	cursor: pointer;
	position: relative;
	border: 0;
	padding: 8px 0;
	min-width: 100px;
	text-align: center;
	margin: 0;
	line-height: 24px;
	font-family: inherit;
	font-weight: 500;
	font-size: 14px;
	background: none;
	outline: none;
	color: var(--text);
	transform: rotate(calc(var(--rotate) * 1deg)) translateZ(0);
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
	.left,
	.right {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		opacity: var(--plane-opacity);
		transform: translate(calc(var(--plane-x) * 1px), calc(var(--plane-y) * 1px)) translateZ(0);
		&:before,
		&:after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			border-radius: calc(var(--border-radius) * 1px);
			transform: translate(var(--x, .4%), var(--y, 0)) translateZ(0);
			z-index: var(--z-index, 2);
			background: var(--background, var(--left-wing-background));
			clip-path: polygon(calc(var(--first-x, var(--left-wing-first-x)) * 1%) calc(var(--first-y, var(--left-wing-first-y)) * 1%), calc(var(--second-x, var(--left-wing-second-x)) * 1%) calc(var(--second-y, var(--left-wing-second-y)) * 1%), calc(var(--third-x, var(--left-wing-third-x)) * 1%) calc(var(--third-y, var(--left-wing-third-y)) * 1%));
		}
	}
	.left:after {
		--x: 0;
		--z-index: 1;
		--background: var(--left-body-background);
		--first-x: var(--left-body-first-x);
		--first-y: var(--left-body-first-y);
		--second-x: var(--left-body-second-x);
		--second-y: var(--left-body-second-y);
		--third-x: var(--left-body-third-x);
		--third-y: var(--left-body-third-y);
	}
	.right:before {
		--x: -.4%;
		--z-index: 2;
		--background: var(--right-wing-background);
		--first-x: var(--right-wing-first-x);
		--first-y: var(--right-wing-first-y);
		--second-x: var(--right-wing-second-x);
		--second-y: var(--right-wing-second-y);
		--third-x: var(--right-wing-third-x);
		--third-y: var(--right-wing-third-y);
	}
	.right:after {
		--x: 0;
		--z-index: 1;
		--background: var(--right-body-background);
		--first-x: var(--right-body-first-x);
		--first-y: var(--right-body-first-y);
		--second-x: var(--right-body-second-x);
		--second-y: var(--right-body-second-y);
		--third-x: var(--right-body-third-x);
		--third-y: var(--right-body-third-y);
	}
	span {
		display: block;
		position: relative;
		z-index: 4;
		opacity: var(--text-opacity);
		&.success {
			z-index: 0;
			position: absolute;
			left: 0;
			right: 0;
			top: 8px;
			transform: rotate(calc(var(--rotate) * -1deg)) scale(var(--success-scale)) translateZ(0);
			opacity: var(--success-opacity);
			color: var(--success);
		}
	}
}

* {
	box-sizing: inherit;
	&:before,
	&:after {
		box-sizing: inherit;
	}
	font-family: 'Inter', Arial;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
}
</style>

<script>
import gsap from 'gsap'

export default {
	name: "paperplane-button",
	methods: {
		changeToPlane () {
			document.querySelectorAll('.button').forEach(button => {
				let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

				button.addEventListener('click', e => {

					if(!button.classList.contains('active')) {

						button.classList.add('active');

						gsap.to(button, {
							keyframes: [{
								'--left-wing-first-x': 50,
								'--left-wing-first-y': 100,
								'--right-wing-second-x': 50,
								'--right-wing-second-y': 100,
								duration: .2,
								onComplete() {
									gsap.set(button, {
										'--left-wing-first-y': 0,
										'--left-wing-second-x': 40,
										'--left-wing-second-y': 100,
										'--left-wing-third-x': 0,
										'--left-wing-third-y': 100,
										'--left-body-third-x': 40,
										'--right-wing-first-x': 50,
										'--right-wing-first-y': 0,
										'--right-wing-second-x': 60,
										'--right-wing-second-y': 100,
										'--right-wing-third-x': 100,
										'--right-wing-third-y': 100,
										'--right-body-third-x': 60
									})
								}
							}, {
								'--left-wing-third-x': 20,
								'--left-wing-third-y': 90,
								'--left-wing-second-y': 90,
								'--left-body-third-y': 90,
								'--right-wing-third-x': 80,
								'--right-wing-third-y': 90,
								'--right-body-third-y': 90,
								'--right-wing-second-y': 90,
								duration: .2
							}, {
								'--rotate': 50,
								'--left-wing-third-y': 95,
								'--left-wing-third-x': 27,
								'--right-body-third-x': 45,
								'--right-wing-second-x': 45,
								'--right-wing-third-x': 60,
								'--right-wing-third-y': 83,
								duration: .25
							}, {
								'--rotate': 55,
								'--plane-x': -8,
								'--plane-y': 24,
								duration: .2
							}, {
								'--rotate': 40,
								'--plane-x': 45,
								'--plane-y': -180,
								'--plane-opacity': 0,
								duration: .3,
								onComplete() {
									setTimeout(() => {
										button.removeAttribute('style');
										gsap.fromTo(button, {
											opacity: 0,
											y: -8
										}, {
											opacity: 1,
											y: 0,
											clearProps: true,
											duration: .3,
											onComplete() {
												button.classList.remove('active');
											}
										})
									}, 2000)
								}
							}]
						})

						gsap.to(button, {
							keyframes: [{
								'--text-opacity': 0,
								'--border-radius': 0,
								'--left-wing-background': getVar('--primary-darkest'),
								'--right-wing-background': getVar('--primary-darkest'),
								duration: .1
							}, {
								'--left-wing-background': getVar('--primary'),
								'--right-wing-background': getVar('--primary'),
								duration: .1
							}, {
								'--left-body-background': getVar('--primary-dark'),
								'--right-body-background': getVar('--primary-darkest'),
								duration: .4
							}, {
								'--success-opacity': 1,
								'--success-scale': 1,
								duration: .25,
								delay: .25
							}]
						})

					}

				})

			});
		}
	}
}
</script>