//Importing installed npm packages inquires(for recieving url)
//importing npm qr-image for creating QR imges
// fs filesystem native node js module
import inquirer from 'inquirer';
import qr, { image } from 'qr-image';
import fs from "fs";

// using inquirer to accept url in terminal 
inquirer
    .prompt([{
        "message": "Enter the URL to Generate QR Code: \n",
        "type": "URL",
        "name": "url"
    } /* Pass your questions in here */ ])
    .then((answers) => {
        {
            // passing url to qr.image to generate QR Code
            const url = answers.url;
            var QR = qr.image(url, { margin: 1 });
            //parsing url name for saving qr image with url name
            const parsedUrl = new URL(url);
            // console.log(parsedUrl);
            let domainNameForQR = parsedUrl.hostname + parsedUrl.pathname.split('.')[0];
            //checking for imgaes folder 
            if (!fs.existsSync('./images')) {
                fs.mkdirSync('./images'); // Create the folder if it doesn't exist
            }
            //removing sensitive characters from url 
            let sanitizedDomainName = domainNameForQR.replace(/[<>:"\/\\|?*]/g, "-");
            console.log(sanitizedDomainName);
            //Saving QR imgae with fs
            QR.pipe(fs.createWriteStream(`./images/${sanitizedDomainName}.png`));
            //Creating a txt file to store URL 
            fs.appendFile("image_url.txt", url + "\n", (err) => {
                if (err) throw err;
                console.log("QR image has been generated");
            })
        } // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error.message);
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error.message);
            // Something else went wrong
        }
    });