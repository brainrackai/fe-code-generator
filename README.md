# FE Code Generator

FE Code Generator is a Command-Line Interface (CLI) tool that allows users to generate code for UI components by providing inputs directly through the terminal. The tool collects details such as the component type, framework/library, language, and description, then uses an external system (like OpenAI) to generate the corresponding code.

## Installation

To install the CLI tool globally, run:

```bash
npm install -g @brainrack/fe-code-generator
```

## Features

- Interactive CLI: Receive detailed prompts for generating UI components.
- Framework/Library Support: Choose between React, Angular, and Vue.
- Language Support: Choose between JavaScript and TypeScript.
- File Saving: Generated code is saved to a specified directory or the current working directory by default.
- Visually Enhanced Experience: Uses chalk, chalk-animation, figlet, and gradient-string for a colorful interface.

## How It Works

1. Run the CLI using npx by specifying the component name:
    ```bash
   brainrack create <component-name>
   ```

2. The tool will prompt you for:
   - A description of the component.
   - The file path where the code should be saved (default is the current directory).
   - Your preferred framework/library (React, Angular, or Vue).
   - Your preferred language (JavaScript or TypeScript).

3. The tool displays a spinner while generating the code and then informs you when the process is complete.

4. A success message with a stylish output is shown once the code is generated.

## Prerequisites

- Node.js: Make sure Node.js >= 18 version is installed on your system.
- npx: Ensure npx is available (it comes with Node.js by default).

## Usage

1. Run the CLI with:
    ```bash
   brainrack create <component-name>
   ```

2. Follow the prompts:
   - Provide a description of the component.
   - Choose where to save the generated code.
   - Select your preferred framework (React, Angular, Vue).
   - Select your preferred language (JavaScript, TypeScript).
   - Select the stylings (CSS, SCSS)

3. The generated code will be saved to the specified location.
