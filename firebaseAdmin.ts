import {
  initializeApp,
  getApps,
  App,
  getApp,
  cert,
  ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

// Ensure serviceKey is imported with the correct type
import serviceKey from "./service_key.json";

// Ensure TypeScript knows this is a ServiceAccount object
const serviceAccount = serviceKey as ServiceAccount;

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
const adminStorage = getStorage(app);

export { app as adminApp, adminDb, adminStorage };
