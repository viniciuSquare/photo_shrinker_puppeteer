const fs = require("fs");

// IMAGES TO UPLOAD
module.exports = async function filesListage(){
  const imagesToUploadList = await fs.readdirSync(__dirname);
  console.log("Completo ", imagesToUploadList);
  
  imagesToUploadList.forEach((name, idx) => {
    if(imagesToUploadList[idx].indexOf(".jpg") < 0 && imagesToUploadList[idx].indexOf(".png") < 0) {
      imagesToUploadList.splice(idx, 1);
    }
  })
  console.log("Filtrado ", imagesToUploadList);
  
  return imagesToUploadList;
}