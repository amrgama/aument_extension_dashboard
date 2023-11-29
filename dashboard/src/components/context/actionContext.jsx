import React from "react";

export const ActionContext = React.createContext(null);

export const ActionContextProvider = ({children})=>{
    // const actionConfig = {
    //     params: [],
    //     cb: function (){},
    //     action: function(){return;},
    //     setAction: function(cb, params){
    //         this.params = params;
    //         this.cb= cb;

    //         this.actoin= function() {
    //             return this.cb(this.params);
    //         };
    //     }
    
    // }
    const actionConfig = {
        label: "",
        method: function (cb, params){ 
            return cb(...params);
        }
    }
    return (
        <ActionContext.Provider value={actionConfig}>
            {children}
        </ActionContext.Provider>
    )
}