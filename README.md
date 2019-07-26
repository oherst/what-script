CLI tool to quickly check which scripts are available in package.json

`npm install -g what-script`

From a command line:

`what-script`

or:

`ws`

Get back a list of available scripts:

```cmd
found 9 script option(s) in package.json:
1: build
2: dev
3: docker:up
4: lint
5: lint:fix
6: start
7: storybook
8: test
9: test:update-snapshots
```

Use the `--show` flag to also list the script command.
