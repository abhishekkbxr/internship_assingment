import connectDb from "../../middleware/db";
import Data from "../../models/Data";

const handler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const data = await Data.create(body);
        res.status(200).json({ success: "success", data: data });
      } catch (error) {
        return res.status(400).json({
          success: "false",
          error: "this method is not allowed ",
          msg: error.message,
        });
      }
      break;

    case "GET":
      try {
        const data = await Data.find();
        res.status(200).json({ success: "success", data: data });
      } catch (error) {
        return res.status(400).json({
          success: "false",
          error: "this method is not allowed ",
          msg: error.message,
        });
      }
      break;
    case "DELETE":
      try {
        const data = await Data.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: "success", data: data });
      } catch (error) {
        return res.status(400).json({
          success: "false",
          error: "this method is not allowed ",
          msg: error.message,
        });
      }
      break;
  }
};

export default connectDb(handler);
