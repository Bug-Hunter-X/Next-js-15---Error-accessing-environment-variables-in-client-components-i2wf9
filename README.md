# Next.js 15 Environment Variable Access in Client Components

This repository demonstrates a bug encountered in Next.js 15 when attempting to access environment variables within client components.  Specifically, accessing an environment variable that isn't defined results in an error, whereas in prior versions it simply returned undefined.

## Bug Description

In `pages/about.js`, an attempt is made to access `process.env.NEXT_PUBLIC_MY_VARIABLE`.  Next.js 15 throws an error because this variable is not defined.  Previous versions would have returned `undefined` without issue.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the error in the browser console.

## Solution

The solution provided addresses this issue by performing a check to verify the environment variable's existence before accessing it. This prevents the error from occurring and maintains compatibility between different versions of Next.js.