<template>
	<div>
		<goals-list :goals="filteredGoals"></goals-list>
		<add-goal @add-goal="addGoal"></add-goal>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";
export default {
	components: {
		GoalsList,
		AddGoal,
	},

	setup() {
		// add props in args above if needed
		// as data : ref create a wrapper object so use .value: 
		const goals = ref([]);
		// as computed : no need for this. anymore
		const filteredGoals = computed(function () {
			return goals.value.filter(
				(goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
			);
		});
		// as methods
		function addGoal(text) {
			const newGoal = {
				id: new Date().toISOString(),
				text: text,
			};
			goals.value.push(newGoal);
		}
		return {
			filteredGoals: filteredGoals,
			addGoal: addGoal
		}
	}
	// data() {
	// 	return {
	// 		goals: [],
	// 	};
	// },
	// computed: {
	// 	filteredGoals() {
	// 		return this.goals.filter(
	// 			(goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
	// 		);
	// 	},
	// },
	// methods: {
	// 	addGoal(text) {
	// 		const newGoal = {
	// 			id: new Date().toISOString(),
	// 			text: text,
	// 		};
	// 		this.goals.push(newGoal);
	// 	},
	// },
};
</script>