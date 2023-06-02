#!/usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const argv = require("minimist")(process.argv.slice(2));

function getScripts() {
  try {
    const contents = fs.readFileSync("package.json", "utf8");
    const parsed = JSON.parse(contents);

    return parsed.scripts;
  } catch {
    console.log(chalk.red("error: package.json not found or cannot be parsed"));
  }
}

function listScripts(withInfo) {
  const scripts = getScripts();

  if (!scripts) {
    return;
  }

  const items = Object.keys(scripts);
  console.log(
    chalk.cyan(`found ${items.length} script option(s) in package.json:`)
  );

  items.forEach((item, idx) => {
    const script = `${idx + 1}: ${chalk.yellow(item)}`;
    const cmd = chalk.grey(scripts[item]);

    withInfo ? console.log(`${script} ${cmd}`) : console.log(script);
  });
}

function runScript(n) {
  const scripts = getScripts();
}

(function init() {
  const args = argv;
  if (args.show) {
    listScripts(true);
  } else {
    listScripts();
  }
})();
