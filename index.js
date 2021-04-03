/* MADE BY NAT2K15 FOR SUPPORT PLEASE JOIN MY DISCORD https://discord.gg/RquDVTfDwu */

const readline = require('readline');
const chalk = require('chalk');
const fs = require('fs')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const mainroot = __dirname;

let carcols = 'nothing';
let handling = 'nothing';
let carvariations = 'nothing';
let vehicles = 'nothing';

console.clear();
rl.question(chalk.bgBlue `Please list the directory the vehicle metas are in:\n`, (firstdir) => {
    console.clear()
    if (firstdir.length == 0) {
        console.log(chalk.red `[ERROR] ` + chalk.white `You have failed to provide a directory`)
        process.exit()
    } else {
        try {
            process.chdir(firstdir);
            console.log(chalk.green `[New directory] ` + chalk.white `${process.cwd()}`);

            if (fs.existsSync(firstdir + './carcols.meta')) carcols = 'success'
            if (fs.existsSync(firstdir + './handling.meta')) handling = 'success'
            if (fs.existsSync(firstdir + './carvariations.meta')) carvariations = 'success'
            if (fs.existsSync(firstdir + './vehicles.meta')) vehicles = 'success'
            rl.question(`What would you like the code to be?\n`, (firstanswer) => {
                if (firstdir.length == 0) {
                    console.log(chalk.red `[ERROR] ` + chalk.white `You have failed to provide the code`)
                    process.exit()
                } else {
                    let code = firstanswer.toLowerCase();
                    rl.question(`What is their discord ID?\n`, (secondanswer) => {
                        console.clear()
                        if (secondanswer.length == 0) {
                            console.log(chalk.red `[ERROR] ` + chalk.white `You have failed to provide the users discord id`)
                            process.exit()
                        } else {
                            let id = secondanswer;
                            if (isNaN(id)) {
                                console.log(chalk.red `[ERROR] ` + chalk.white `The Id was not a number`)
                                process.exit()
                            } else {
                                let newid = code;
                                try {
                                    if (fs.existsSync(`${firstdir}/carcols.meta`)) {
                                        carcols = 'success';
                                    }
                                } catch (err) {};
                                try {
                                    if (fs.existsSync(`${firstdir}/handling.meta`)) {
                                        handling = 'success';
                                    }
                                } catch (err) {};
                                try {
                                    if (fs.existsSync(`${firstdir}/carvariations.meta`)) {
                                        carvariations = 'success';
                                    }
                                } catch (err) {};
                                try {
                                    if (fs.existsSync(`${firstdir}/vehicles.meta`)) {
                                        vehicles = 'success';
                                    }
                                } catch (err) {};
                                if (carcols == 'success') console.log(chalk.green `${process.cwd()}/carcols.meta`)
                                if (handling == 'success') console.log(chalk.green `${process.cwd()}/handling.meta`)
                                if (carvariations == 'success') console.log(chalk.green `${process.cwd()}/carvariations.meta`)
                                if (vehicles == 'success') console.log(chalk.green `${process.cwd()}/vehicles.meta`)
                                rl.question(`Are you sure you would like to write "${newid}" into the files stated above?\n`, (thirdanswer) => {
                                    console.clear()
                                    if (thirdanswer.length == 0) {
                                        console.log(chalk.red `[ERROR] ` + chalk.white `You have failed to provide a vaild answer`)
                                        process.exit()
                                    } else if (thirdanswer.toLowerCase('y') || thirdanswer.toLowerCase('yes')) {
                                        let num = 0;
                                        if (carcols == 'success') {
                                            fs.appendFileSync(`${firstdir}/carcols.meta`, `\n<!-- <Item>${newid}</Item> -->`);
                                            num++;
                                        }
                                        if (handling == 'success') {
                                            fs.appendFileSync(`${firstdir}/handling.meta`, `\n<!-- <Item>${newid}</Item> -->`)
                                            num++;
                                        }
                                        if (carvariations == 'success') {
                                            fs.appendFileSync(`${firstdir}/carvariations.meta`, `\n<!-- <Item>${newid}</Item> -->`)
                                            num++;
                                        }
                                        if (vehicles == 'success') {
                                            fs.appendFileSync(`${firstdir}/vehicles.meta`, `\n<!-- <Item>${newid}</Item> -->`)
                                            num++;
                                        }
                                        fs.appendFileSync(`${mainroot}/codes.txt`, `\nDiscord ID: ${id} | Code: ${newid}`)
                                        console.log(chalk.green `[DONE] ` + chalk.white `I have wrote "<!-- <Item>${newid}</Item> -->" into the ${num} files. We have saved this code for you in ${mainroot}\codes.txt`)
                                        process.exit();
                                    } else if (thirdanswer.toLowerCase('n') || thirdanswer.toLowerCase('no')) {
                                        process.exit();
                                    } else {
                                        process.exit();
                                    }
                                })
                            }
                        }
                    })
                }
            })

        } catch (err) {
            console.error(`Error: ${err}`);
            process.exit()
        }
    }
})