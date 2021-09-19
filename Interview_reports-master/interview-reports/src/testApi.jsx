import React, { useEffect, useState } from "react";

const Test = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "dev@dev.com",
        password: "developer",
      }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.accessToken));

    const get = async () => {
       const response = await fetch("http://localhost:3333/660/api/candidates", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
    const author = await response.json();
    console.log(author);
    return author
        // .then((response) => {
        //   console.log(response);
        //   response.json();
        // })
        // .then((data) => {
        //   console.log(data);
        //   return data;
        // })
        // .catch((err) => console.log(err));
    };
    // console.log(get());
    get()
  }, [token]);

  //const cal = () =>{
  //   const get = async () => {
  //     await fetch("http://localhost:3333/660/api/companies", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Accept': "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => {
  //         console.log(response);
  //         response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         return data;
  //       }).catch(err => console.log(err));
  //   };
  //   get();
  //   }

  //   useEffect(cal, [token])

  return <h1>test</h1>;
};

export default Test;
