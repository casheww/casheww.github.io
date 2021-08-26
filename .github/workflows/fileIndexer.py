import json
import os


if __name__ == "__main__":

    file_tree = {}

    for root, dirs, files, in os.walk("."):
        for d in dirs:
            _dir = os.path.join(root, d)

            # filter out hidden folders and their child folders
            cont = False
            for part in _dir.split(os.sep):
                if part.startswith(".") and part != ".":
                    cont = True
                    break
            if cont:
                continue

            print(_dir)
            dir_contents = os.listdir(_dir)
            dir_contents.remove("index.html")

            file_tree[_dir] = dir_contents

    with open("files.json", "w+") as f:
        json.dump(file_tree, f)
