#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import InitGradient from "gradient-string";
import inquirer from "inquirer";
import path from 'path';
import fs from 'fs';
import { createSpinner } from "nanospinner";
import { program } from 'commander';

import dotenv from 'dotenv';
dotenv.config();

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

async function welcome(component) {
    if (!component) return
    const title = chalkAnimation.rainbow(`You are building ${component}! \n`)
    await sleep()
    title.stop()
}

async function enquireDetail(component) {
    const description = await inquirer.prompt({
        name: 'desc',
        type: 'input',
        message: `Provide description of your ${component}`,
    })
    const filepath = await inquirer.prompt({
        name: 'fp',
        type: 'input',
        message: `Where do you want to keep your code?`,
        default: process.cwd()
    })
    const selectedLibrary = await inquirer.prompt({
        name: 'library',
        type: 'list',
        message: `Select Framework/Library for ${component}`,
        choices: [
            'Angular',
            'React',
            'Vue'
        ]
    })
    const selectedLanguage = await inquirer.prompt({
        name: 'language',
        type: 'list',
        message: `Select Language for ${component}`,
        choices: [
            'Javascript',
            'Typescript',
        ]
    })
    const selectedStyles = await inquirer.prompt({
        name: 'style',
        type: 'list',
        message: `Select Style for ${component}`,
        choices: [
            'CSS',
            'SCSS',
        ]
    })
    return { library: selectedLibrary.library, language: selectedLanguage.language, description: description.desc, filepath: filepath.fp, style: selectedStyles.style }

}

async function generateAnswer(component, filepath, library, language, description, style) {
    const spinner = createSpinner(`Generating code for ${component}...`).start()
    try {
        const params = JSON.stringify({
            component,
            framework: library,
            language,
            description,
            style
        })
        const response = await fetch(`${process.env.API_ENDPOINT}/bring-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: params
        })
        const data = await response.json()
        const filePath = path.join(filepath, `${component}.${language.toLowerCase() === 'javascript' ? 'js' : 'ts'}`); // Define file path based on style
        fs.writeFileSync(filePath, data);
        spinner.success({ text: `Your code has been generated. Check ${filePath}.` })
    } catch (error) {
        spinner.error({ text: 'Failed to generate, retry please' })
        process.exit(1)
    }

}

function showSuccessResult() {
    const msg = `Code Generated!`
    figlet(msg, (err, data) => {
        console.log(InitGradient.pastel.multiline(data))
    })

}

program
    .command('create <component>')
    .description('Generate a frontend component')
    .action(async (component) => {
        await welcome(component)
        const promptResult = await enquireDetail(component)
        const filepath = promptResult.filepath
        const library = promptResult.library
        const language = promptResult.language
        const description = promptResult.description
        const style = promptResult.style
        await generateAnswer(component, filepath, library, language, description, style)
        showSuccessResult()

    });

program.parse(process.argv);


