const getReports = async (token) => {
    if (token && token !== 'undefined') {
        const response = await fetch("http://localhost:3333/api/reports", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const reports = await response.json();
        return reports;
    }
    
    return [];
}

export default getReports;