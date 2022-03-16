export class Owner {
    avatar_url: string
events_url: string
followers_url: string
following_url: string
gists_url: string
gravatar_id: string
html_url: string
id: number
login: string
node_id: string
organizations_url:string
received_events_url: string
repos_url: string

starred_url: string
subscriptions_url: string
type: string
url:string;
}
export class Repo{
    allow_forking: true
    archive_url: string;
    assignees_url: string;
    branches_url: string;
    clone_url: string;
    collaborators_url: string;
    comments_url: string;
    stargazers_count: string;
    size: string;
    language: string;
    name: string;
    ssh_url: string;
    updated_at: string;
    url: string;
    watchers_count: number;
    forks: number;
    visibility: string;
    owner: Owner[];
}

export class Repos{

}