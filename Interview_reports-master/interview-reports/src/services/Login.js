 const getToken = async (email, password) => {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email, 
        password: password, 
      }),
    });
    
    const data = await response.json();
    return data;
  };
  export default getToken;