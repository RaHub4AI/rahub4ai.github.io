const publications = {
  2024: [
    {
      title: "Predicting the Activity of Unidentified Chemicals in Complementary Bioassays from the HRMS Data to Pinpoint Potential Endocrine Disruptors",
      url: "https://pubs.acs.org/doi/full/10.1021/acs.jcim.3c02050",
      authors: "Ida Rahu, Meelis Kull, Anneli Kruve",
      journal: "Journal of Chemical Information and Modeling, 2024",
      toc: "https://pubs.acs.org/cms/10.1021/acs.jcim.3c02050/asset/images/medium/ci3c02050_0004.gif",
      abstract: "The majority of chemicals detected via nontarget liquid chromatography high-resolution mass spectrometry (HRMS) in environmental samples remain unidentified [...]"
    }
  ],
  2025: [
    {
      title: "Critical review on in silico methods for structural annotation of chemicals detected with LC/HRMS non-targeted screening",
      url: "https://link.springer.com/article/10.1007/s00216-024-05471-x",
      authors: "Henrik Hupatz<sup>1</sup>, Ida Rahu<sup>1,*</sup>, Wei-Chieh Wang, Pilleriin Peets, Emma H. Palm, Anneli Kruve<sup>*</sup>",
      journal: "Analytical and Bioanalytical Chemistry, 2025",
      toc: "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs00216-024-05471-x/MediaObjects/216_2024_5471_Figa_HTML.png",
      abstract: "Non-targeted screening with liquid chromatography coupled to high-resolution mass spectrometry (LC/HRMS) is increasingly leveraging in silico﻿ methods [...]"
    }
  ]
};

const currentYear = new Date().getFullYear();
const years = Object.keys(publications).sort((a, b) => b - a);

function renderYears() {
  const yearList = document.getElementById("year-list");
  years.forEach(year => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" onclick="showPublications(${year}); return false;" style="text-decoration: none; font-weight: bold;" id="year-${year}">${year}</a>`;
    yearList.appendChild(li);
  });
}

function showPublications(year) {
  const container = document.getElementById("publication-details");
  const pubs = publications[year] || [];
  const yearLinks = document.querySelectorAll("#year-list a");
  yearLinks.forEach(link => link.style.color = "#000");
  const selectedYearLink = document.getElementById(`year-${year}`);
  if (selectedYearLink) selectedYearLink.style.color = "blue";

  if (pubs.length === 0) {
    container.innerHTML = `<h3>${year}</h3><p>No publications for this year.</p>`;
    return;
  }

  const html = [`<h3>Publications - ${year}</h3>`];
  const abstractLimit = 400; // number of characters to show before "Read more"

  pubs.forEach((pub, index) => {
    const shortAbstract = pub.abstract.slice(0, abstractLimit);
    const isLong = pub.abstract.length > abstractLimit;

    html.push(`
      <div style="margin-bottom: 30px; border-bottom: 1px solid #ccc; padding-bottom: 20px;">
        <h4><a href="${pub.url}" target="_blank">${pub.title}</a></h4>
        <p><strong>Authors:</strong> ${pub.authors}</p>
        <p><strong>Journal:</strong> ${pub.journal}</p>
        <img src="${pub.toc}" alt="TOC Graphic" style="max-width: 100%; margin: 10px 0;">
        <p><strong>Abstract:</strong></p>
        <p id="abstract-short-${index}">${shortAbstract}${isLong ? '... <a href="#" onclick="toggleAbstract(' + index + '); return false;" id="toggle-link-' + index + '">Read more</a>' : ''}</p>
        <p id="abstract-full-${index}" style="display: none;">${pub.abstract} <a href="#" onclick="toggleAbstract(${index}); return false;" id="toggle-link-full-${index}">Read less</a></p>
      </div>
    `);
  });

  container.innerHTML = html.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderYears();
  const defaultYear = publications[currentYear] ? currentYear : years[0];
  showPublications(defaultYear);
});

function toggleAbstract(index) {
  const shortEl = document.getElementById(`abstract-short-${index}`);
  const fullEl = document.getElementById(`abstract-full-${index}`);

  const isHidden = fullEl.style.display === "none";
  fullEl.style.display = isHidden ? "block" : "none";
  shortEl.style.display = isHidden ? "none" : "block";
}
