#!/bin/bash

CI=true RELATIVE_CI_ENDPOINT="http://localhost:3000" RELATIVE_CI_COMMIT=abc123 RELATIVE_CI_COMMIT_MESSAGE="Really: should work" DEBUG=relative-ci:* RELATIVE_CI_KEY=abc123 RELATIVE_CI_SLUG=abc/123 npm run build
