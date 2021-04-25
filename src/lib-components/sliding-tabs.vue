<!--
 * @Date: 25/04/2021 21.38.31 +0800
 * @Author: KnowsCount
 * @LastEditTime: 25/04/2021 21.53.13 +0800
 * @FilePath: /vue-lib/src/lib-components/sliding-tabs.vue
-->

<template>
	<div class="tabs">
		<input type="radio" id="radio-1" name="tabs" checked />
		<label class="tab" for="radio-1">{{ radio1 }}
			<span class="notification">{{ notification }}</span>
		</label>
		<input type="radio" id="radio-2" name="tabs" />
		<label class="tab" for="radio-2">{{ radio2 }}</label>
		<input type="radio" id="radio-3" name="tabs" />
		<label class="tab" for="radio-3">{{ radio3 }}</label>
		<span class="glider"></span>
	</div>
</template>

<script>
export default {
	name: "sliding-tabs",
	props: {
		radio1: {
			type: String,
			default: "Upcoming"
		},
		radio2: {
			type: String,
			default: "Development"
		},
		radio3: {
			type: String,
			default: "Completed"
		},
		notification: {
			type: Number,
			default: 2
		}
	}
}
</script>

<style lang="scss" scoped>

*,
*:after,
*:before {
	box-sizing: border-box;
	--primary-color: #185ee0;
	--secondary-color: #e6eef9;
	font-family: "Inter", sans-serif;
}
.tabs {
	display: flex;
	position: relative;
	background-color: #fff;
	box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
	padding: 0.75rem;
	border-radius: 99px; // just a high number to create pill effect
	* {
		z-index: 2;
	};
	width: 40em;
}

input[type="radio"] {
	display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 54px;
	width: 200px;
	font-size: 1.25rem;
	font-weight: 500;
	border-radius: 99px; // just a high number to create pill effect
	cursor: pointer;
	transition: color 0.15s ease-in;
}

.notification {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	margin-left: 0.75rem;
	border-radius: 50%;
	background-color: var(--secondary-color);
	transition: 0.15s ease-in;
}

input[type="radio"] {
	&:checked {
		& + label {
			color: var(--primary-color);
			& > .notification {
				background-color: var(--primary-color);
				color: #fff;
			}
		}
	}
}

input[id="radio-1"] {
	&:checked {
		& ~ .glider {
			transform: translateX(0);
		}
	}
}

input[id="radio-2"] {
	&:checked {
		& ~ .glider {
			transform: translateX(100%);
		}
	}
}

input[id="radio-3"] {
	&:checked {
		& ~ .glider {
			transform: translateX(200%);
		}
	}
}

.glider {
	position: absolute;
	display: flex;
	height: 54px;
	width: 200px;
	background-color: var(--secondary-color);
	z-index: 1;
	border-radius: 99px; // just a high number to create pill effect
	transition: 0.25s ease-out;
}

@media (max-width: 700px) {
	.tabs {
		transform: scale(0.6);
	}
}
</style>