﻿# eval-with-scopes

```js
import { evalWithScopes } from 'eval-with-scopes'
import * as SomeModule form 'some-module' // eg: provides someFunc() function

function private() {

  evalWithScopes("someFunc(y)", SomeModule, {y: 1})
}

```

Also, we prove a evalWithScopesNoWith that can run under 'strict' mode.

