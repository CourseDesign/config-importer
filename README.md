# Config Auto Importer

Developers can manage environment variables in various stages, such as production, test, development, etc.  
Developers can set default status by option or NODE_ENV. if you not set default status, it will be development  
Environment variables are created in the common.js and `yourEnvironmentStatus`.js  
However, if an environment variable is declared in an .env file or a system environment variable, that value takes precedence.



## How to use

```javascript
const configImporter = require('@araxsiyual/config-importer');

const config = configImporter.import(__dirname);
```



## Option

```javascript
{
    "env": process.env.NODE_ENV || 'development'
}
```

- `env`: Environment status, it will read `env`.js file, and make config
