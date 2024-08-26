// Filename - App.js

import React, { useLayoutEffect, useState } from "react";

const App = () => {
	const [value, setValue] = useState("ULE");

	useLayoutEffect(() => {
		console.log(
			"UseLayoutEffect is called with the value of ",
			value
		);
	}, [value]);
	setTimeout(() => {
		setValue("UseLayoutEffect");
	}, 2000);

	return (
		<div
			style={{
				textAlign: "center",
				margin: "auto",
			}}
		>
			<h1 style={{ color: "green" }}>{value}</h1> The React JS useLayoutEffect works similarly to useEffect but rather works asynchronously like the useEffect hook,
		</div>
	);
};

export default App;
