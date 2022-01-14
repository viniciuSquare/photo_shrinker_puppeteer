const puppeteer = require('puppeteer');
const filesListage = require('./images/filesHandler');

async function shrinkHandler(imageName, browser) {
  const page = await browser.newPage();
  
  // set viewport and user agent (just in case for nice viewing)
	await page.setViewport({width: 1600, height: 768});
	await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

  await page.goto('https://squoosh.app/');

  await page.waitForSelector('input[type=file]');

  const inputUploadHandle = await page.$('input[type=file]');
  inputUploadHandle.uploadFile(`./images/${imageName}`); // UPLOAD THE IMAGE
  console.log("Loaded file ", imageName);

  await page.waitForTimeout(30000)
    .then(async()=>{
      await page.evaluate(()=>{
        document.querySelector("#app > div > file-drop > div > div._options-2_zecs5_54._options_zecs5_22._options-2-theme_zecs5_54 > div._results-right_17s86_295._results_17s86_26 > a").click();
      })
    
      console.log("Downloaded file ", imageName);

    })
}

(async () => {
  let launchOptions = { 
    headless: false, 
    args: ['--start-maximized'] };
  const browser = await puppeteer.launch(launchOptions);

  const imagesToUpload = await filesListage();
  // IMAGES TO UPLOAD

  try {
    let controlVar = 0;
    for(let image of imagesToUpload) {
      await shrinkHandler(image, browser);
      
      //console.log("Posição ", imagesToUpload.indexOf(image));
      //console.log("ARQUIVO", image);

      console.log(`${+imagesToUpload.indexOf(image) + 1}/${imagesToUpload.length}`);
      
      controlVar++;
    }

    if(controlVar == imagesToUpload.length)
      await browser.close();

  } catch (error) {
    console.log(error)    
  }
})();

