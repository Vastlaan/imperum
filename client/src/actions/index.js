export const handleResponsiveDesignDisplay = (store) =>{
	const displayResponsiveDesign = !store.state.displayResponsiveDesign
	return store.setState({displayResponsiveDesign})
}
export const handleModernDesignDisplay = (store) =>{
	const displayModernDesign = !store.state.displayModernDesign
	return store.setState({displayModernDesign})
}
export const handleOptimizeDesignDisplay = (store) =>{
	const displayOptimizeDesign = !store.state.displayOptimizeDesign
	return store.setState({displayOptimizeDesign})
}
export const handleFunctionalDesignDisplay = (store) =>{
	const displayFunctionalDesign = !store.state.displayFunctionalDesign
	return store.setState({displayFunctionalDesign})
}