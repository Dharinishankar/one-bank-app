import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [custId, setCustId] = useState(0);
	const[email,setEmail]=useState("test");
	const[mobile,setMobile]=useState();
	const[lastLoginTime,setlastLoginTime]=useState();

	return (
		<Context.Provider value={{ custId, setCustId ,email,setEmail,mobile,setMobile,lastLoginTime,setlastLoginTime}}>
			{children}
		</Context.Provider>
	);
};
