# Svelte TIL directory project

This project aims to serve as an index for a TIL (today I learned) repository.

Instead of using Github's ugly interface to access you knowledge center you can customize this project to list it yourself
in a much nicer interface.


## Running the project

Fork project, install dependencies and run using the `dev` command. (e.g: `yarn dev` or `npm run dev`).

## Environment variables

In order to properly run the project, copy the contents of `.env.template` to a new `.env` file.
Setup your github's username and the repositoy name where you are holding your TIL content.

```
VITE_GITHUB_USERNAME=nilomiranda
VITE_GITHUB_REPOSITORY=TIL
```