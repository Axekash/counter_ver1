import {AppRootStateType} from "../store/store";


export const loadStorage = () => {
	try{
		const minCount = localStorage.getItem('minCount');
		const maxCount = localStorage.getItem('maxCount');
		const count = localStorage.getItem('count');
		const isActive = localStorage.getItem('isActive');
		const editMode = localStorage.getItem('editMode');

		if(minCount && maxCount &&  count && isActive && editMode) {
			return {
				counter: {
					minCount: +JSON.parse(minCount),
					maxCount: +JSON.parse(maxCount),
					count: +JSON.parse(count)
				},
				mode: {
					isActive: !!JSON.parse(isActive),
					editMode: !!JSON.parse(editMode)
				}
			}
			//JSON.stringify({counter: {minCount, maxCount, count},mode: {isActive,editMode}})
		}
		return undefined
	} catch (err) {
		return undefined
	}
}

export const saveState = (state: AppRootStateType) => {
	try{
		const minCount = JSON.stringify(state.counter.minCount)
		const maxCount = JSON.stringify(state.counter.maxCount)
		const count = JSON.stringify(state.counter.count)
		const isActive = JSON.stringify(state.mode.isActive)
		const editMode = JSON.stringify(state.mode.editMode)
		localStorage.setItem('minCount', minCount)
		localStorage.setItem('maxCount', maxCount)
		localStorage.setItem('count', count)
		localStorage.setItem('isActive', isActive)
		localStorage.setItem('editMode', editMode)
	} catch {

	}
}