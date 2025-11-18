// composables/useAppwrite.ts
import { Client, TablesDB, Permission, Role } from "appwrite";

export const useAppwrite = () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("TU_PROJECT_ID");

  const tablesDB = new TablesDB(client);

  const getPublicData = async (databaseId: string, tableId: string) => {
    try {
      const response = await tablesDB.listRows(databaseId, tableId);
      return response.rows;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  return { getPublicData };
};
