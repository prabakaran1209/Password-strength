# Password Strength Checker

A modern, responsive, and interactive web application that evaluates password strength in real time. This project helps users create stronger passwords by checking essential security requirements through a clean and user-friendly interface.

## Live Demo

**[View Password Strength Checker](https://prabakaran1209.github.io/Password-strength/)**

## Project Overview

The Password Strength Checker is a frontend web development project built using HTML, CSS, and JavaScript. It analyzes user-entered passwords based on predefined security requirements and provides instant visual feedback about password strength.

The application encourages users to follow better password practices by identifying missing security criteria and suggesting improvements.

## Features

- **Real-Time Password Analysis:** Evaluates password strength as the user types.
- **Password Visibility Toggle:** Allows users to show or hide their password.
- **Dynamic Strength Indicator:** Displays password strength with a color-coded progress bar.
- **Password Validation:** Checks five essential password requirements.
- **Interactive Feedback:** Provides suggestions to improve password security.
- **Clear Password Option:** Allows users to clear the input instantly.
- **Responsive Design:** Works across desktop, tablet, and mobile devices.
- **Modern UI:** Attractive dark-themed interface with gradient and glassmorphism effects.

## Password Validation Criteria

The application evaluates passwords based on the following conditions:

| Requirement | Description |
|---|---|
| Minimum Length | At least 8 characters |
| Uppercase Letter | At least one uppercase letter (A-Z) |
| Lowercase Letter | At least one lowercase letter (a-z) |
| Number | At least one numeric digit (0-9) |
| Special Character | At least one special character |

## Password Strength Levels

The application provides five strength levels based on the number of requirements satisfied:

| Score | Strength |
|---|---|
| 0 | Very Weak |
| 1 | Very Weak |
| 2 | Weak |
| 3 | Fair |
| 4 | Good |
| 5 | Strong |

## Technologies Used

- **HTML5** – Structure of the web application.
- **CSS3** – Styling, responsive layout, gradients, and visual effects.
- **JavaScript** – Password validation, DOM manipulation, and interactive functionality.
- **Git & GitHub** – Version control and project hosting.
- **GitHub Pages** – Deployment of the live website.

## Project Structure

```text
Password-strength/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js        # Password strength checking logic
└── README.md        # Project documentation
```

## Installation and Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/prabakaran1209/Password-strength.git
```

**2. Navigate to the project directory**

```bash
cd Password-strength
```

**3. Open the project**

Open `index.html` in your preferred web browser.

No additional dependencies or installations are required.

## Deployment

This project is deployed using **GitHub Pages**.

To deploy your own version:

1. Create a repository on GitHub.
2. Upload the project files.
3. Navigate to repository Settings.
4. Select Pages.
5. Choose Deploy from a branch.
6. Select the `main` branch and `/ (root)` folder.
7. Click Save.

Your website will be published using GitHub Pages.

## Security Note

This application performs password validation entirely on the client side. Passwords are not transmitted to an external server by the application.

The strength indicator is based on predefined character requirements and is intended for educational purposes. It does not perform password breach checks or comprehensive password entropy analysis.

## Learning Outcomes

Through this project, I gained practical experience in:

- Frontend web development.
- JavaScript event handling.
- DOM manipulation.
- Regular expressions for password validation.
- Responsive web design.
- Creating interactive user interfaces.
- Deploying websites using GitHub Pages.

## Future Enhancements

- Password generator with customizable options.
- Password entropy estimation.
- Common password detection.
- Improved accessibility.
- Advanced password security recommendations.

## Author

**Prabakaran**

- GitHub: [@prabakaran1209](https://github.com/prabakaran1209)
- Live Project: [Password Strength Checker](https://prabakaran1209.github.io/Password-strength/)

---

If you find this project useful, consider giving the repository a star!

**Built with HTML, CSS, and JavaScript.**
