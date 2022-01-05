# MERN Stack

## Create Project Directory
From the terminal:
```
mkdir mern-demo
```

## Open Project Directory In Visual Studio Code
The following will open up a new window with the new folder loaded as a new project.  
From the terminal:
```
code ./mern-demo
```

## Initialize NPM
From the terminal inside the new VSC window:
```
npm init -y
```

## Initialize Git
From the terminal:
```
git init
```

## Create GitIgnore 
From the terminal:
```
touch .gitignore
```

## Edit GitIgnore
Add the following content to the new .gitignore file:
```
node_modules
notes

```

## Create README.md
From the terminal:
```
touch README.md
```

## Install TypeScript Tools
```
npm i -D typescript ts-node nodemon @types/node
```

## Initialize TypeScript
```
./node_modules/.bin/tsc --init
```
This generates a tsconfig.json file.

## Edit TsConfig
Open the tsconfig.json file and uncomment/edit the following:
```js
// ...
"rootDir": "./src", // this tells typescript where to build the source from
// ...
"outDir": "./dist", // this tells typescript where to output the built javascript
```

## Make Source Directory
From the terminal:
```
mkdir src
```

## Make Develop Entry Point
From the terminal:
```
touch src/dev.ts
```

## Edit Dev Entry Point
Add the following content to /src/dev.ts:
```ts
console.log("ts working");
```

## Edit NPM Scripts
In the scripts block in package.json, add the following content:
```js
  "scripts": {
    "build": "tsc",
    "dev": "nodemon ./src/dev.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Run Dev Script
From the terminal:
```
npm run dev
```
The application should start using `nodemon`, you will see the output from dev.ts a few lines down.  
Try saving the dev.ts file with CTRL + S and you will see the file restarts on change.  
To stop the script from running, CTRL + C.  Sometimes quitting the script will not work, in this case start a new terminal and delete the terminal running the script.

## Run Build Script
From the terminal:
```
npm run build
```
The built JavaScript should appear in the `/dist` directory.

## Add Build Destination Directory To GitIgnore
Inside the .gitignore file add the following:
```
node_modules
notes
dist

```
This will ignore the built JS when pushing to Github.

## Make Notes Directory
Make a directory to hold notes, ignored from pushing to Github.
```
mkdir notes
```

## Install Express
```
npm i express
```

## Install Express Types As Dev Dependency
```
npm i -D @types/express
```
