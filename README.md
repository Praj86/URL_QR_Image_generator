# QR Code Generator

This Node.js project allows you to generate QR codes from URLs. By providing a URL through the terminal, the application creates a QR code and saves it as an image in an `images` folder. Additionally, the URL is logged in a text file (`image_url.txt`).

## Features
- Accepts a URL as input via the terminal.
- Generates a QR code image from the provided URL.
- Saves the generated QR code image in a local `images` folder.
- Logs the URL in a text file (`image_url.txt`) for reference.
- Automatically sanitizes the URL to remove any special characters in the file name.

## Prerequisites
- Node.js installed on your machine.
- NPM (Node Package Manager).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd qr-code-generator
    ```
3. Install the required npm packages:
    ```bash
    npm install
    ```
# Usage

1. Run the application:
    ```bash 
    node app.js
    ```
2. You will be prompted to enter a URL in the terminal. For example:
    ``` bash
    Enter the URL to Generate QR Code:
     ```

3. After entering the URL, the program will:
    1. Generate a QR code.
    2. Save the QR code as a PNG file in the image directory with a sanitized filename.
    3. Append the URL to a text file (image_url.txt).

4. Check the images folder for the saved QR code image.

## Folder Structure
```bash 
/qr-code-generator
  ├── /images          # Folder where the QR code images are saved.
  ├── app.js           # Main application script.
  ├── image_url.txt    # Text file storing the URLs.
  ├── package.json     # NPM package file.
  └── README.md        # Project documentation.
```
## Dependencies

- `inquirer`: For interacting with the user via the terminal.
- `qr-image`: For generating QR codes.
- `fs` (File System): Native Node.js module used for file handling.

## Example

When you run the program and enter a URL like `https://example.com`, the following happens:

- A QR code image is generated and saved as `example-com.png` in the `images` folder.
- The URL `https://example.com` is appended to the `image_url.txt` file.

## Troubleshooting

- If the `images` folder does not exist, the application will create it automatically.
- The application will sanitize the URL to ensure no special characters are present in the filename (such as `<>:"/\|?*`).

## License
This project is licensed under the MIT License.


### Bash Commands Explanation:
- **Clone the repo**: `git clone https://github.com/your-username/qr-code-generator.git`
- **Navigate into the project directory**: `cd qr-code-generator`
- **Install dependencies**: `npm install`
- **Run the app**: `node app.js`

This way, the commands are clearly formatted and users can directly copy-paste them when setting up the project. Let me know if you'd like further modifications!

