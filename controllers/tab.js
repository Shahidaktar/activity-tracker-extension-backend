import { TryCatch } from "../middlewares/error.js";
import { Tab } from "../models/tab.js";
import ErrorHandler from "../utils/utility-class.js";

export const newTab = TryCatch(async (req, res, next) => {
  const { timespent, url } = req.body;

  if (!timespent || !url) {
    return next(new ErrorHandler("Please add all fields", 400));
  }

  await Tab.create({
    url,

    timespent,
  });
  return res.status(201).json({
    success: true,
    message: "tab created",
  });
});

export const allTabs = TryCatch(async (req, res, next) => {
  const tabs = await Tab.find({});
  return res.status(200).json({
    success: true,
    tabs,
  });
});

// export const getUser = TryCatch(async (req, res, next) => {
//   const id = req.params.id;
//   const user = await User.findById(id);
//   if (!user) return next(new ErrorHandler("User not Found", 400));
//   return res.status(200).json({
//     success: true,
//     user,
//   });
// });

// export const deleteUser = TryCatch(async (req, res, next) => {
//   const id = req.params.id;
//   const user = await User.findById(id);
//   if (!user) return next(new ErrorHandler("User not Found", 400));
//   await user.deleteOne();
//   return res.status(200).json({
//     success: true,
//     message: "User Deleted Successfully",
//   });
// });
