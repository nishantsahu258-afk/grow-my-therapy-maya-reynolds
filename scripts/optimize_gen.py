from PIL import Image
import os

dst = "/home/z/my-project/public/images"
# Convert generated PNGs to optimized JPGs (smaller for web)
for f in ["detail-light", "help-adults", "help-professionals", "help-creatives", "approach", "honoring", "cta-detail"]:
    p = f"{dst}/{f}.png"
    im = Image.open(p).convert("RGB")
    out = f"{dst}/{f}.jpg"
    im.save(out, quality=86, optimize=True, progressive=True)
    os.remove(p)
    print(f, im.size, os.path.getsize(out)//1024, "KB")
