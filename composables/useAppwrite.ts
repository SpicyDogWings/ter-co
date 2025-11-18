// composables/useAppwrite.ts
import { Client, TablesDB, Permission, Role } from "appwrite";

export const useAppwrite = () => {
  const config = useRuntimeConfig();

  const client = new Client()
    .setEndpoint(config.public.appwriteEndpointUrl)
    .setProject(config.public.appwriteProjectId);

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
