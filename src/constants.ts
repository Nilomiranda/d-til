export const githubUserName = import.meta.env.VITE_GITHUB_USERNAME;
export const repositoryName = import.meta.env.VITE_GITHUB_REPOSITORY;
export const forbiddenFolderNames = (import.meta.env.VITE_FORBIDDEN_FOLDERS as string).split(',');