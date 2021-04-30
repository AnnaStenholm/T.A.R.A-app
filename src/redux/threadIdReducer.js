const INITIAL_STATE = {
        isThreadId: (""),
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case ShowComments: 

               return { isThreadId:("")};

            case :

               return {
                  ...state, count: state.count - 1,

               };

             default: return state;

        }

    };

    export default reducer;