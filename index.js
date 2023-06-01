const { PORT, DATABASE, mongoose, app } = require("./app");

// connect mongoose....
const mongooseConnect = async () => {
  try {
    await mongoose.connect(DATABASE);
    console.log("mongoose connect done.");
  } catch (error) {
    console.log(error);
  }
};

// run server....
app.listen(PORT, async () => {
  console.log(`server run successfully http://127.0.0.1:${PORT}`);
  await mongooseConnect();
});
