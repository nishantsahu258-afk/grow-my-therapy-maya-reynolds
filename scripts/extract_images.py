import fitz  # PyMuPDF
import os

doc = fitz.open("/home/z/my-project/upload/Dr. Maya Reynolds, PsyD.pdf")
outdir = "/home/z/my-project/assets"
os.makedirs(outdir, exist_ok=True)

count = 0
for page_num, page in enumerate(doc):
    for img_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n - pix.alpha > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        # also render rotated page images if needed
        fname = f"{outdir}/p{page_num+1}_img{img_index+1}.png"
        pix.save(fname)
        print(f"Saved {fname}  size={pix.width}x{pix.height}")
        count += 1

# Also render the page regions at high DPI to capture images as displayed (handles placement/cropping)
for page_num, page in enumerate(doc):
    mat = fitz.Matrix(3, 3)
    pix = page.get_pixmap(matrix=mat)
    fname = f"{outdir}/page{page_num+1}_full.png"
    pix.save(fname)
    print(f"Saved full page {fname} size={pix.width}x{pix.height}")

print("Total extracted:", count)
