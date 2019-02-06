const createPolicy = (name,amount) => {
	return {
		type : 'CREATE_POLICY',
		payload : {
			name ,
			amount 
		}
	}
};

const deletePlicy = (name) => {
	return {
		type : 'DELETE_POLICY',
		payload : {
			name 
		}
	}
} ;

const createClaim = (name,amountOfClainMoney) => {
	return {
		type : 'CREATE_CLAIM',
		payload : {
			name,
			amountOfClainMoney
		}
	}
};

const cliamHistory = (oldHistoryOfClaim=[],action) => {
	if(action.type === 'CREATE_CLAIM') {
		return [...oldHistoryOfClaim,action.payload]
	}
	return oldHistoryOfClaim;
};

const accounting = (bagOfMoney=0,action) => {
	if(action.type === 'CREATE_CLAIM' ) {
		return bagOfMoney - action.payload.amountOfClainMoney;
	}else if(action.type === 'CREATE_POLICY') {
		return bagOfMoney + action.payload.amount;
	}else {
		return bagOfMoney;
	}
};

const plicies = (listOfPolicies = [],action) => {
	if(action.type === 'CREATE_POLICY' ) {
		return [...listOfPolicies,action.payload.name];
	}else if(action.type === 'DELETE_POLICY') {
		return listOfPolicies.filter( name => name != action.payload.name);
	}else{
		return listOfPolicies;
	}
}

const {createStore,combineReducers}=Redux;

const ourDepartments = combineReducers({
  cliamHistory,
  accounting,
  plicies
});

const ourStore =createStore(ourDepartments);
ourStore.dispatch(createPolicy('alex',100));
ourStore.dispatch(createPolicy('sahed',120));
ourStore.dispatch(createPolicy('Sahadat',100));

ourStore.dispatch(createClaim('alex',100));

ourStore.dispatch(deletePlicy('Sahadat'));

console.log(ourStore.getState())
