
import getReports from "./getReport";

export const deleteReport = async (token, id) => {
  await fetch(`http://localhost:3333/660/api/reports/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await getReports(token);
  
  return data;
};