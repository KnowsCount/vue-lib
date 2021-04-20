<!--
 * @Date: 19/04/2021 13.43.25 +0800
 * @Author: KnowsCount
 * @LastEditTime: 20/04/2021 16.35.37 +0800
 * @FilePath: /vue-lib/src/lib-components/input-box.vue
-->

<template>
	<div id="app">
		<div class="input" ref="input">
			<div class="text">
				<input type="text" ref="inp" @input="inputChange" placeholder="Spit it!" :class="{'clear': isClear}" />
			</div>
			<button class="clear" ref="clear" @click="clear">
			<svg viewBox="0 0 24 24">
				<path class="line" ref="line" d="M2 2L22 22" />
				<path class="long" d="M9 15L20 4" />
				<path class="arrow" d="M13 11V7" />
				<path class="arrow" d="M17 11H13" />
			</svg>
			</button>
		</div>
	</div>
</template>

<script>
// import { to, set, timeline } from 'gsap/all'
import gsap from "gsap";
export default {
	name: "input-box",
	data () {
		return {
			isClear: false
		};
	},
	mounted () {
		// let clear = this.$refs.clear
		// let input = this.$refs.input
		// let { classList } = input
		// let svgLine = this.$refs.line
		// let svgLineProxy = new Proxy({
		//   x: null
		// }, {
		//   set(target, key, value) {
		//     target[key] = value
		//     if(target.x !== null) {
		//       svgLine.setAttribute('d', getPath(target.x, .1925))
		//     }
		//     return true
		//   },
		//   get(target, key) {
		//     return target[key]
		//   }
		// })
		// svgLineProxy.x = 0
	},
	methods: {
		inputChange (e) {
			const { value } = e.target;
			let elem = this.$refs.input;
			let timer = 0;
			clearTimeout(timer);
			timer = setTimeout(() => {
				let bool = value.length;
				gsap.to(elem, {
					"--clear-scale": bool ? 1 : 0,
					duration: bool ? 0.5 : 0.15,
					ease: bool ? "elastic.out(1, .7)" : "none"
				});
				gsap.to(elem, {
					"--clear-opacity": bool ? 1 : 0,
					duration: 0.15
				});
			}, 250);
		},
		clear () {
			let elem = this.$refs.input;
			let svgLine = this.$refs.line;
			let input = this.$refs.inp;
			const _this = this;
			let svgLineProxy = new Proxy({
				x: null
			}, {
				set (target, key, value) {
					target[key] = value;
					if (target.x !== null) {
						svgLine.setAttribute("d", _this.getPath(target.x, 0.1925));
					}
					return true;
				},
				get (target, key) {
					return target[key];
				}
			});
			svgLineProxy.x = 0;
			this.isClear = true;
			gsap.set(elem, {
				"--clear-swipe-left": (input.offsetWidth - 16) * -1 + "px"
			});
			gsap.to(elem, {
				keyframes: [{
					"--clear-rotate": "45deg",
					duration: 0.25
				}, {
					"--clear-arrow-x": "2px",
					"--clear-arrow-y": "-2px",
					duration: 0.15
				}, {
					"--clear-arrow-x": "-3px",
					"--clear-arrow-y": "3px",
					"--clear-swipe": "-3px",
					duration: 0.15,
					onStart () {
						gsap.to(svgLineProxy, {
							x: 3,
							duration: 0.1,
							delay: 0.05
						});
					}
				}, {
					"--clear-swipe-x": 1,
					"--clear-x": (input.offsetWidth) * -1 + "px",
					duration: 0.45,
					onComplete () {
						input.value = "";
						input.focus();
						console.log(input.value);
						gsap.to(elem, {
							"--clear-arrow-offset": "4px",
							"--clear-arrow-offset-second": "4px",
							"--clear-line-array": "8.5px",
							"--clear-line-offset": "27px",
							"--clear-long-offset": "24px",
							"--clear-rotate": "0deg",
							"--clear-arrow-o": 1,
							duration: 0,
							delay: 0.7,
							onStart () {
								_this.isClear = false;
							}
						});
						gsap.to(elem, {
							"--clear-opacity": 0,
							duration: 0.2,
							delay: 0.55
						});
						gsap.to(elem, {
							"--clear-arrow-o": 0,
							"--clear-arrow-x": "0px",
							"--clear-arrow-y": "0px",
							"--clear-swipe": "0px",
							duration: 0.15
						});
						gsap.to(svgLineProxy, {
							x: 0,
							duration: 0.45,
							ease: "elastic.out(1, .75)"
						});
					}
				}, {
					"--clear-swipe-x": 0,
					"--clear-x": "0px",
					duration: 0.4,
					delay: 0.35
				}]
			});
			gsap.to(elem, {
				"--clear-arrow-offset": "0px",
				"--clear-arrow-offset-second": "8px",
				"--clear-line-array": "28.5px",
				"--clear-line-offset": "57px",
				"--clear-long-offset": "17px",
				duration: 0.2
			});
		},
		getPoint (point, i, a, smoothing) {
			let cp = (current, previous, next, reverse) => {
				let p = previous || current;
				let n = next || current;
				let o = {
					length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
					angle: Math.atan2(n[1] - p[1], n[0] - p[0])
				};
				let angle = o.angle + (reverse ? Math.PI : 0);
				let length = o.length * smoothing;
				return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
			};
			let cps = cp(a[i - 1], a[i - 2], point, false);
			let cpe = cp(point, a[i - 1], a[i + 1], true);
			return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
		},
		getPath (x, smoothing) {
			return [
				[2, 2],
				[12 - x, 12 + x],
				[22, 22]
			].reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${this.getPoint(point, i, a, smoothing)}`, "");
		}
	}
};
</script>

<style lang="scss">
.input {
	--background: #fff;
	--border-default: #D0D0DF;
	--border-active: #3D6DF9;
	--shadow-default: #{rgba(#202048, .12)};
	--shadow-active: #{rgba(#3D6DF9, .25)};
	--text-color: #818190;
	--placeholder-color: #C9C9D9;
	--placeholder-color-hover: #BABAC9;
	--close: #818190;
	--close-light: #BABAC9;
	--close-background: #F1F1FA;
	width: 100%;
	max-width: 240px;
	display: flex;
	align-items: center;
	position: relative;
	border-radius: 8px;
	background: var(--background);
	box-shadow: inset 0 0 0 var(--border-width, 1px) var(--border, var(--border-default)), 0 1px 3px var(--shadow, var(--shadow-default));
	transition: box-shadow .2s;
	--clear-x: 0px;
	--clear-swipe-left: 0px;
	--clear-swipe-x: 0;
	--clear-swipe: 0px;
	--clear-scale: 0;
	--clear-rotate: 0deg;
	--clear-opacity: 0;
	--clear-arrow-o: 1;
	--clear-arrow-x: 0px;
	--clear-arrow-y: 0px;
	--clear-arrow-offset: 4px;
	--clear-arrow-offset-second: 4px;
	--clear-line-array: 8.5px;
	--clear-line-offset: 27px;
	--clear-long-array: 8.5px;
	--clear-long-offset: 24px;
	&.clearing,
	&:focus-within {
		--border-width: 1.5px;
		--border: var(--border-active);
		--shadow: var(--shadow-active);
}
&.clearing {
	--close-background: transparent;
	--clear-arrow-stroke: var(--close-light);
}
.text {
	flex-grow: 1;
	input {
		-webkit-appearance: none;
		line-height: 24px;
		background: none;
		border: none;
		outline: none;
		display: block;
		width: 100%;
		margin: 0;
		padding: 12px 16px;
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		color: var(--text-color);
		&::placeholder {
			color: var(--placeholder-color);
			transition: color .2s;
		}
	}
}
&:hover {
	.text {
		input {
			&::placeholder {
				color: var(--placeholder-color-hover);
			}
		}
	}
}
.clear {
	-webkit-appearance: none;
	position: relative;
	outline: none;
	z-index: 1;
	padding: 0;
	margin: 12px 12px 12px 0;
	border: none;
	background: var(--b, transparent);
	transition: background .2s;
	border-radius: 50%;
	opacity: var(--clear-opacity);
	transform: scale(var(--clear-scale)) translateZ(0);
	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 12px;
		left: var(--clear-swipe-left);
		background: var(--background);
		transform-origin: 100% 50%;
		transform: translateX(var(--clear-swipe)) scaleX(var(--clear-swipe-x)) translateZ(0);
	}
	svg {
		display: block;
		position: relative;
		z-index: 1;
		width: 24px;
		height: 24px;
		outline: none;
		cursor: pointer;
		fill: none;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke: var(--close);
		transform: translateX(var(--clear-x)) rotate(var(--clear-rotate)) translateZ(0);
		path {
			transition: stroke .2s;
			&.arrow {
			stroke: var(--clear-arrow-stroke, var(--close));
			stroke-dasharray: 4px;
			stroke-dashoffset: var(--clear-arrow-offset);
			opacity: var(--clear-arrow-o);
			transform: translate(var(--clear-arrow-x), var(--clear-arrow-y)) translateZ(0);
				&:last-child {
					stroke-dashoffset: var(--clear-arrow-offset-second);
				}
		}
			&.line {
				stroke-dasharray: var(--clear-line-array) 28.5px;
				stroke-dashoffset: var(--clear-line-offset);
			}
			&.long {
				stroke: var(--clear-arrow-stroke, var(--close));
				stroke-dasharray: var(--clear-long-array) 15.5px;
				stroke-dashoffset: var(--clear-long-offset);
				opacity: var(--clear-arrow-o);
				transform: translate(var(--clear-arrow-x), var(--clear-arrow-y)) translateZ(0);
			}
		}
	}
		&:hover {
			--b: var(--close-background);
		}
	}
}

html {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
}

* {
	box-sizing: inherit;
	&:before,
	&:after {
		box-sizing: inherit;
	}
}

// Center & dribbble
body {
	// min-height: 100vh;
	// display: flex;
	font-family: 'Inter', Arial;
	// justify-content: center;
	// align-items: center;
}
</style>
