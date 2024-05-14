# Lately, I've been diving into web automation. During this period, a friend of mine needed assistance with a sizable friend-unfriend task, so I gladly helped them out.

# Puppeteer Facebook Unfriends Script

The **Puppeteer Facebook Unfriends Script** is a tool developed using Puppeteer, a Node.js library that provides a high-level API to control headless Chrome or Chromium browsers. This script is specifically crafted for automating the process of unfriending users on Facebook.

## Features:

1. **Automated Login**: The script automates the login process by navigating to the Facebook login page and filling in the required credentials (email/phone and password).

2. **Navigation to Friends List**: After successful login, the script directs the browser to the user's friends list page on Facebook.

3. **Scrolling and Interaction**: It simulates scrolling through the friends list to dynamically load more friends, and then interacts with each friend element to unfriend them.

4. **Error Handling**: The script includes mechanisms to handle errors, such as network interruptions or missing elements on the page.

5. **Iteration**: It can perform the unfriending process iteratively for a specified number of times or until a certain condition is met.

6. **Browser Closure**: Upon completion of the unfriending task, the script gracefully closes the browser.

## Usage:

1. Ensure you have Node.js and Puppeteer installed on your system.
2. Copy the script to your local environment.
3. Customize the script by replacing placeholder values with your Facebook credentials and any other necessary parameters.
4. Run the script using Node.js.

## Important Considerations:

- **Responsible Usage**: Use this script responsibly and ethically. Avoid excessive or abusive unfriending behavior to maintain a positive user experience on Facebook.
- **Compliance**: Adhere to Facebook's terms of service and community guidelines to prevent any potential account restrictions or bans.
- **Security**: Be cautious with your Facebook credentials and sensitive information. Avoid sharing or exposing them unintentionally.
