/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react'

if (true) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
  })
}
