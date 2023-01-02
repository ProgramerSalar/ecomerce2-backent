const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    console.log("firebase user in authcheck", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      err: "invalid or expired token",
    });
  }
  // console.log(req.headers);
  // next();
};
