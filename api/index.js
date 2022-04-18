const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const sliderRoute = require("./routes/slider");
const keyFeatureRoute = require("./routes/keyFeature");
const productRoute = require("./routes/product");
const workRoute = require("./routes/work");
const categoryRoute = require("./routes/category");
const aboutBannerRoute = require("./routes/aboutBanner");
const contactBannerRoute = require("./routes/contactBanner");
const missionRoute = require("./routes/mission");
const visionRoute = require("./routes/vision");
const teamRoute = require("./routes/team");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/sliders", sliderRoute);
app.use("/api/keyFeatures", keyFeatureRoute);
app.use("/api/products", productRoute);
app.use("/api/works", workRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/aboutBanners", aboutBannerRoute);
app.use("/api/contactBanners", contactBannerRoute);
app.use("/api/missions", missionRoute);
app.use("/api/visions", visionRoute);
app.use("/api/teams", teamRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
