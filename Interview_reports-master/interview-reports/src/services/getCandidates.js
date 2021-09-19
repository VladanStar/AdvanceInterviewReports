const token = sessionStorage.getItem("token");

 const getCandidates = async () => {
    const response = await fetch("http://localhost:3333/api/candidates", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const getCandidates = await response.json();
    return getCandidates;
}
export default getCandidates;