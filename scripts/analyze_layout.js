// Save layout analysis for each section
const sections = document.querySelectorAll('.page-section');
const out = [];
sections.forEach((s, i) => {
  const r = s.getBoundingClientRect();
  const bg = getComputedStyle(s).backgroundColor;
  out.push(`SECTION ${i}: bg=${bg} height=${Math.round(r.height)}px`);
});
return out.join('\n');
