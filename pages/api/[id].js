import connectDb from "../../middleware/db";
import Data from "../../models/Data";

const handler = async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "DELETE":
      try {
        const data = await Data.findByIdAndDelete(id);
        res.status(200).json({ success: "success", data: data });
      } catch (error) {
        return res
          .status(400)
          .json({
            success: "false",
            error: "this method is not allowed ",
            msg: error.message,
          });
      }
      break;
  }
};

export default connectDb(handler);
