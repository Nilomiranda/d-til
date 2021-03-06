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

## Github's TIL repositoy structure

Ideally, you should separete content by folder. Keep each content folder at the root of your repository.
Inside each folder, write what you learned in a markdown file.

```
project-root
    | - content_folder
    | - another_content_folder
    | - more_content_folder
        | - I learned this today.md
```

## Forbidden/hidden content

Use the env var `VITE_FORBIDDEN_FOLDERS` to configure folders that should be excluded from being rendered
in the content list.

Names should be comma separated.

## Important notes

Right now the requests to github are all unauthenticated. Rate limits to your requests may apply.
With that in mind, your repository **can't be private**.
Remember to not put any sensitive information in this repository.