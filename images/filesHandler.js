const fs = require("fs");

// IMAGES TO UPLOAD
module.exports = async function filesListage(){
  const imagesToUploadList = await fs.readdirSync(__dirname);
  
  console.log("completo ", imagesToUploadList);

  imagesToUploadList.forEach((name, idx) => {
    if(!imagesToUploadList[idx].startsWith("IMG") || (imagesToUploadList[idx].indexOf(".png") < 0)) {
      imagesToUploadList.splice(idx, 1);
    }
  })

  return imagesToUploadList;
}