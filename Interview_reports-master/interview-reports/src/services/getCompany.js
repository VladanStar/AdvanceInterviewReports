export const getCompany= async (token) => {
    const response = await fetch("http://localhost:3333/660/api/companies", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const company = await response.json();
    return company;
  };