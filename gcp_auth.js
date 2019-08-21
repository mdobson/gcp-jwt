const { GoogleToken } = require('gtoken');

const getGoogleToken = async (aud, keyFile, cb) => {
  const keys = require(keyFile)  
  const url = aud;
  const client = new GoogleToken({
    email: keys.client_email,
    key: keys.private_key,
    additionalClaims: {
      target_audience: url
    }
  });
  try {
    const tokens = await client.getToken((err, tokens)=>{
      if(err) {
        console.log(err);
        return;
      }
      return cb(tokens)
    });
  } catch(e) {
    console.log(e)
  } 
}

module.exports = getGoogleToken;