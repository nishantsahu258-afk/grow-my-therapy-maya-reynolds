#!/bin/bash
# Generate cohesive supporting imagery for Dr. Maya Reynolds site
# Consistent art direction: warm earthy neutrals, cream/terracotta, soft natural light, film/editorial photography, no people, no text
set -e
OUT=/home/z/my-project/public/images
STYLE="warm earthy color palette, cream beige and soft terracotta tones, soft diffused natural window light, calm minimal composition, editorial film photography, subtle grain, high quality, photorealistic, no people, no text, no watermark"

z-ai image -p "Sheer linen curtain glowing in warm morning sunlight by a window in a peaceful therapy office, gentle light and shadow on wall, $STYLE" -o "$OUT/detail-light.png" -s 768x1344
z-ai image -p "Cozy reading armchair with a soft knitted throw blanket beside a large bright window in a calm counseling room, potted olive plant, $STYLE" -o "$OUT/help-adults.png" -s 1024x1024
z-ai image -p "Serene desk corner with an open blank journal, ceramic mug of tea and glasses in warm sunlight, quiet workspace of a thoughtful professional, $STYLE" -o "$OUT/help-professionals.png" -s 1024x1024
z-ai image -p "Artist studio corner with stacked art books, dried pampas grass in a clay vase and sketchbook in soft warm light, creative peaceful space, $STYLE" -o "$OUT/help-creatives.png" -s 1024x1024
z-ai image -p "Two comfortable armchairs facing each other with a small wooden side table and plant between them in a warm inviting therapy room with hardwood floor, $STYLE" -o "$OUT/approach.png" -s 864x1152
z-ai image -p "Soft coastal bluff walking path with golden dry grasses and hazy ocean view at warm sunrise, Santa Monica California coastline mood, peaceful hopeful atmosphere, $STYLE" -o "$OUT/honoring.png" -s 1152x864
z-ai image -p "Ceramic cup of herbal tea on a wooden stool next to a woven basket and plant leaves casting gentle shadows on a cream wall, $STYLE" -o "$OUT/cta-detail.png" -s 768x1344
echo "ALL DONE"
