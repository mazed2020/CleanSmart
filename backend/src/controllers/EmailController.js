import { EmailSender } from "../utills/EmailUtils.js";

export const EmailController = async (req, res) => {
  const { EmailTo, EmailText, EmailSubject } = req.body || {};

  
  if (!EmailTo || !EmailText || !EmailSubject) {
    return res.status(400).json({
      error: "EmailTo, EmailText, and EmailSubject are required",
    });
  }

  try {
     await EmailSender(EmailTo, EmailText, EmailSubject);
    return res.json({ ok: true, message:"successfull send massege" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
