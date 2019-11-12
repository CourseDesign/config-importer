# Config Importer

Developers can manage environment variables in various stages, such as production, test, development, etc.  
Developers can set default status by option or NODE_ENV. if you not set default status, it will be development  
Environment variables are created in the default.js and `yourEnvironmentStatus`.js  
However, if an environment variable is declared in an .env file or a system environment variable, that value takes precedence.



## How to use

```javascript
const configImporter = require('@araxsiyual/config-importer');

const config = configImporter.import(__dirname, /*option*/);
```



## Option

```javascript
{
    "env":  process.env.NODE_ENV || 'development',
    "valueName": 'valueName',
    "default": 'common'
}
```

- `env`: Environment status, it will read `env`.js file, and make config
- `valueName`: If object have `valueName`, module use `valueName`'s value for read System value or .env, If the object does not have a `valueName`, module use object name for read System value or .env
- `default`: default environment file name

## Example
### .env file variable name

#### default.js

```javascript
module.exports = {
    parent: {
        childA: 0
    }
}
```

#### .env

```
PARENT_CHILD_A = 1
```

- parent.childA will be 1



### if environment status is development

#### .env

```
PARENT_CHILD_A = 1
PARENT_CHILD_A_DEVELOPMENT = 2
```

- parent.childA will be 2

