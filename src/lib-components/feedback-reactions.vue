<!--
 * @Date: 23/04/2021 19.48.35 +0800
 * @Author: KnowsCount
 * @LastEditTime: 23/04/2021 20.21.31 +0800
 * @FilePath: /vue-lib/src/lib-components/feedback-reactions.vue
-->

<template>
	<div>
		<ul class="feedback">
			<li class="angry" @click="changeEmoji">
				<div>
					<svg class="eye left">
						<use xlink:href="#eye" />
					</svg>
					<svg class="eye right">
						<use xlink:href="#eye" />
					</svg>
					<svg class="mouth">
						<use xlink:href="#mouth" />
					</svg>
				</div>
			</li>
			<li class="sad" @click="changeEmoji">
				<div>
					<svg class="eye left">
						<use xlink:href="#eye" />
					</svg>
					<svg class="eye right">
						<use xlink:href="#eye" />
					</svg>
					<svg class="mouth">
						<use xlink:href="#mouth" />
					</svg>
				</div>
			</li>
			<li class="ok" @click="changeEmoji">
				<div></div>
			</li>
			<li class="good active" @click="changeEmoji">
				<div>
					<svg class="eye left">
						<use xlink:href="#eye" />
					</svg>
					<svg class="eye right">
						<use xlink:href="#eye" />
					</svg>
					<svg class="mouth">
						<use xlink:href="#mouth" />
					</svg>
				</div>
			</li>
			<li class="happy" @click="changeEmoji">
				<div>
					<svg class="eye left">
						<use xlink:href="#eye" />
					</svg>
					<svg class="eye right">
						<use xlink:href="#eye" />
					</svg>
				</div>
			</li>
		</ul>
				
		<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
			<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
				<path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
			</symbol>
			<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 7" id="mouth">
				<path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
			</symbol>
		</svg>
	</div>
</template>

<style lang="scss">
.feedback {
	--normal: #ECEAF3;
	--normal-shadow: #D9D8E3;
	--normal-mouth: #9795A4;
	--normal-eye: #595861;
	--active: #F8DA69;
	--active-shadow: #F4B555;
	--active-mouth: #F05136;
	--active-eye: #313036;
	--active-tear: #76b5e7;
	--active-shadow-angry: #e94f1d;
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	li {
		position: relative;
		border-radius: 50%;
		background: var(--sb, var(--normal));
		box-shadow: inset 3px -3px 4px var(--sh, var(--normal-shadow));
		transition: background .4s, box-shadow .4s, transform .3s;
		-webkit-tap-highlight-color: transparent;
		&:not(:last-child) {
			margin-right: 20px;
		}
		div {
			width: 40px;
			height: 40px;
			position: relative;
			transform: perspective(240px) translateZ(4px);
			svg,
			&:before,
			&:after {
				display: block;
				position: absolute;
				left: var(--l, 9px);
				top: var(--t, 13px);
				width: var(--w, 8px);
				height: var(--h, 2px);
				transform: rotate(var(--r, 0deg)) scale(var(--sc, 1)) translateZ(0);
			}
			svg {
				fill: none;
				stroke: var(--s);
				stroke-width: 2px;
				stroke-linecap: round;
				stroke-linejoin: round;
				transition: stroke .4s;
				&.eye {
					--s: var(--e, var(--normal-eye));
					--t: 17px;
					--w: 7px;
					--h: 4px;
					&.right {
						--l: 23px;
					}
				}
				&.mouth {
					--s: var(--m, var(--normal-mouth));
					--l: 11px;
					--t: 23px;
					--w: 18px;
					--h: 7px;
				}
			}
			&:before,
			&:after {
				content: '';
				z-index: var(--zi, 1);
				border-radius: var(--br, 1px);
				background: var(--b, var(--e, var(--normal-eye)));
				transition: background .4s;
			}
		}
		&.angry {
			--step-1-rx: -24deg;
			--step-1-ry: 20deg;
			--step-2-rx: -24deg;
			--step-2-ry: -20deg;
			div {
				&:before {
					--r: 20deg;
				}
				&:after {
					--l: 23px;
					--r: -20deg;
				}
				svg {
					&.eye {
						stroke-dasharray: 4.55;
						stroke-dashoffset: 8.15;
					}
				}
			}
			&.active {
				animation: angry 1s linear;
				div {
					&:before {
						--middle-y: -2px;
						--middle-r: 22deg;
						animation: toggle .8s linear forwards;
					}
					&:after {
						--middle-y: 1px;
						--middle-r: -18deg;
						animation: toggle .8s linear forwards;
					}
				}
			}
		}
		&.sad {
			--step-1-rx: 20deg;
			--step-1-ry: -12deg;
			--step-2-rx: -18deg;
			--step-2-ry: 14deg;
			div {
				&:before,
				&:after {
					--b: var(--active-tear);
					--sc: 0;
					--w: 5px;
					--h: 5px;
					--t: 15px;
					--br: 50%;
				}
				&:after {
					--l: 25px;
				}
				svg {
					&.eye {
						--t: 16px;
					}
					&.mouth {
						--t: 24px;
						stroke-dasharray: 9.5;
						stroke-dashoffset: 33.25;
					}
				}
			}
			&.active {
				div {
					&:before,
					&:after {
						animation: tear .6s linear forwards;
					}
				}
			}
		}
		&.ok {
			--step-1-rx: 4deg;
			--step-1-ry: -22deg;
			--step-1-rz: 6deg;
			--step-2-rx: 4deg;
			--step-2-ry: 22deg;
			--step-2-rz: -6deg;
			div {
				&:before {
					--l: 12px;
					--t: 17px;
					--h: 4px;
					--w: 4px;
					--br: 50%;
					box-shadow: 12px 0 0 var(--e, var(--normal-eye));
				}
				&:after {
					--l: 13px;
					--t: 26px;
					--w: 14px;
					--h: 2px;
					--br: 1px;
					--b: var(--m, var(--normal-mouth));
				}
			}
			&.active {
				div {
					&:before {
						--middle-s-y: .35;
						animation: toggle .2s linear forwards;
					}
					&:after {
						--middle-s-x: .5;
						animation: toggle .7s linear forwards;
					}
				}
			}
		}
		&.good {
			--step-1-rx: -14deg;
			--step-1-rz: 10deg;
			--step-2-rx: 10deg;
			--step-2-rz: -8deg;
			div {
				&:before {
					--b: var(--m, var(--normal-mouth));
					--w: 5px;
					--h: 5px;
					--br: 50%;
					--t: 22px;
					--zi: 0;
					opacity: .5;
					box-shadow: 16px 0 0 var(--b);
					filter: blur(2px);
				}
				&:after {
					--sc: 0;
				}
				svg {
					&.eye {
						--t: 15px;
						--sc: -1;
						stroke-dasharray: 4.55;
						stroke-dashoffset: 8.15;
					}
					&.mouth {
						--t: 22px;
						--sc: -1;
						stroke-dasharray: 13.3;
						stroke-dashoffset: 23.75;
					}
				}
			}
			&.active {
				div {
					svg {
						&.mouth {
							--middle-y: 1px;
							--middle-s: -1;
							animation: toggle .8s linear forwards;
						}
					}
				}
			}
		}
		&.happy {
			div {
				--step-1-rx: 18deg;
				--step-1-ry: 24deg;
				--step-2-rx: 18deg;
				--step-2-ry: -24deg;
				&:before {
					--sc: 0;
				}
				&:after {
					--b: var(--m, var(--normal-mouth));
					--l: 11px;
					--t: 23px;
					--w: 18px;
					--h: 8px;
					--br: 0 0 8px 8px;
				}
				svg {
					&.eye {
						--t: 14px;
						--sc: -1;
					}
				}
			}
			&.active {
				div {
					&:after {
						--middle-s-x: .95;
						--middle-s-y: .75;
					   animation: toggle .8s linear forwards;
					}
				}
			}
		}
		&:not(.active) {
			cursor: pointer;
			&:active {
				transform: scale(.925);
			}
		}
		&.active {
			--sb: var(--active);
			--sh: var(--active-shadow);
			--m: var(--active-mouth);
			--e: var(--active-eye);
			div {
				animation: shake .8s linear forwards;
			}
		}
	}
}

@keyframes shake {
	30% {
		transform: perspective(240px) rotateX(var(--step-1-rx, 0deg)) rotateY(var(--step-1-ry, 0deg)) rotateZ(var(--step-1-rz, 0deg)) translateZ(10px);
	}
	60% {
		transform: perspective(240px) rotateX(var(--step-2-rx, 0deg)) rotateY(var(--step-2-ry, 0deg)) rotateZ(var(--step-2-rz, 0deg)) translateZ(10px);
	}
	100% {
		transform: perspective(240px) translateZ(4px);
	}
}

@keyframes tear {
	0% {
		opacity: 0;
		transform: translateY(-2px) scale(0) translateZ(0);
	}
	50% {
		transform: translateY(12px) scale(.6, 1.2) translateZ(0);
	}
	20%,
	80% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: translateY(24px) translateX(4px) rotateZ(-30deg) scale(.7, 1.1) translateZ(0);
	}
}

@keyframes toggle {
	50% {
		transform: translateY(var(--middle-y, 0)) scale(var(--middle-s-x, var(--middle-s, 1)), var(--middle-s-y, var(--middle-s, 1))) rotate(var(--middle-r, 0deg));
	}
}

@keyframes angry {
	40% {
		background: var(--active);
	}
	45% {
		box-shadow: inset 3px -3px 4px var(--active-shadow), inset 0 8px 10px var(--active-shadow-angry);
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
</style>

<script>
export default {
	name: "feedback-reactions",
	methods: {
		changeEmoji () {
			document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
			if(!entry.classList.contains('active')) {
				document.querySelector('.feedback li.active').classList.remove('active');
				entry.classList.add('active');
			}
			e.preventDefault();
		}));
		}
	}
}
</script>