from github import Github
from pprint import pprint

# Github username
username = "D123455"
# pygithub object
g = Github()
# get that user by username
user = g.get_user(username)

for repo in user.get_repos():
    print(repo)