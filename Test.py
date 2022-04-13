import requests
from pprint import pprint
username ="D123455"
url = f"https://api.github.com/users/{username}"
user_data = requests.get(url).json()
#pprint(user_data)
user = g.get_user(username)
for repo in user.get_repos():
    print(repo)