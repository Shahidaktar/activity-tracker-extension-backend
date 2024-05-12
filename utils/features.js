import mongoose from "mongoose";


export const connectDB = (uri) => {
  mongoose
    .connect(uri, {
      dbName: "Activity_Tracker_2024",
    })
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
