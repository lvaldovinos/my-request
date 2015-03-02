# my-request
Request module based on superagent and supertest

<h2>Installation</h2>

  git clone https://github.com/lvaldovinos/my-request.git<br/>
  cd my-request<br/>
  npm pack<br/>
  npm install my-request-1.0.0.tgz<br/>

<h2>Example code</h2>

<p>Inspired by Supertest and Superagent, my-request uses the same logic than supertest to do a reuest <strong>example:</strong></p>

```javascript
  var request = require('my-request');
  
  request('http://alonso-thoughtsapi.rhcloud.com')
    .get('/')
    .end(function(res) {
      console.log(res.body); // { hello: 'world' }
    });
```

<h2>Test</h2>

<code>npm test</code>

<h2>License</h2>

The MIT License (MIT)

Copyright (c) 2015 Luis Alonso Valdovinos Valencia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
