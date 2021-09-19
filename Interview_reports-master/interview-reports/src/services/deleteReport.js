export const deleteReport = async (token, id) => {
    const response = await fetch(`http://localhost:3333/660/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const reports = await response.json();
    console.log(reports.legnth)
    return reports;
  };