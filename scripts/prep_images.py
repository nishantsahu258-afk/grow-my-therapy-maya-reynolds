from PIL import Image
import os

src = "/home/z/my-project/assets"
dst = "/home/z/my-project/public/images"
os.makedirs(dst, exist_ok=True)

jobs = [
    ("p1_img1.png", "maya-portrait.jpg", 1000),   # portrait 1024x1536
    ("p1_img2.png", "office-1.jpg", 1600),        # brick wall office
    ("p1_img3.png", "office-2.jpg", 1600),        # bookshelf office
]
for name, out, w in jobs:
    im = Image.open(f"{src}/{name}").convert("RGB")
    if im.width > w:
        im = im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)
    im.save(f"{dst}/{out}", quality=88, optimize=True, progressive=True)
    print(out, im.size, os.path.getsize(f'{dst}/{out}')//1024, "KB")
