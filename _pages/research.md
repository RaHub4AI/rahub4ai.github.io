---
layout: page
title: Research
permalink: /research/
---

<!-- Short description -->
## Research Overview

My research focuses on computational chemistry, cheminformatics, and the development of methods for drug discovery and analytical science. This page showcases our publications over the years.

<!-- Main layout container -->
<div style="display: flex; gap: 20px; margin-top: 30px;">
  <!-- Left timeline -->
  <div id="timeline" style="flex: 1;">
    <h3>Timeline</h3>
    <ul id="year-list" style="list-style: none; padding: 0;">
      <!-- Years will be populated by JS -->
    </ul>
  </div>

  <!-- Right publication panel -->
  <div id="publication-details" style="flex: 3;">
    <!-- Publications will be loaded here -->
  </div>
</div>

<script>
// Publication data (expand this)
const publications = {
  2024: [
    {
      title: "Predicting the Activity of Unidentified Chemicals in Complementary Bioassays from the HRMS Data to Pinpoint Potential Endocrine Disruptors",
      url: "https://pubs.acs.org/doi/full/10.1021/acs.jcim.3c02050",
      authors: "Ida Rahu, Meelis Kull, Anneli Kruve",
      journal: "Journal of Chemical Information and Modeling, 2024",
      toc: "https://pubs.acs.org/cms/10.1021/acs.jcim.3c02050/asset/images/medium/ci3c02050_0004.gif",
      abstract: "The majority of chemicals detected via nontarget liquid chromatography high-resolution mass spectrometry (HRMS) in environmental samples remain unidentified, challenging the capability of existing machine learning models to pinpoint potential endocrine disruptors (EDs). Here, we predict the activity of unidentified chemicals across 12 bioassays related to EDs within the Tox21 10K dataset. Single- and multi-output models, utilizing various machine learning algorithms and molecular fingerprint features as an input, were trained for this purpose. To evaluate the models under near real-world conditions, Monte Carlo sampling was implemented for the first time. This technique enables the use of probabilistic fingerprint features derived from the experimental HRMS data with SIRIUS+CSI:FingerID as an input for models trained on true binary fingerprint features. Depending on the bioassay, the lowest false-positive rate at 90% recall ranged from 0.251 (sr.mmp, mitochondrial membrane potential) to 0.824 (nr.ar, androgen receptor), which is consistent with the trends observed in the models’ performances submitted for the Tox21 Data Challenge. These findings underscore the informativeness of fingerprint features that can be compiled from HRMS in predicting the endocrine-disrupting activity. Moreover, an in-depth SHapley Additive exPlanations analysis unveiled the models’ ability to pinpoint structural patterns linked to the modes of action of active chemicals. Despite the superior performance of the single-output models compared to that of the multi-output models, the latter’s potential cannot be disregarded for similar tasks in the field of in silico toxicology. This study presents a significant advancement in identifying potentially toxic chemicals within complex mixtures without unambiguous identification and effectively reducing the workload for postprocessing by up to 75% in nontarget HRMS.
    }
  ],
  2025: [
    {
      title: "Critical review on in silico methods for structural annotation of chemicals detected with LC/HRMS non-targeted screening",
      url: "https://link.springer.com/article/10.1007/s00216-024-05471-x",
      authors: "Henrik Hupatz<sup>1</sup>, Ida Rahu<sup>1,*</sup>, Wei-Chieh Wang, Pilleriin Peets, Emma H. Palm, Anneli Kruve<sup>*</sup>",
      journal: "Analytical and Bioanalytical Chemistry, 2025",
      toc: "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs00216-024-05471-x/MediaObjects/216_2024_5471_Figa_HTML.png",
      abstract: "Non-targeted screening with liquid chromatography coupled to high-resolution mass spectrometry (LC/HRMS) is increasingly leveraging in silico﻿ methods, including machine learning, to obtain candidate structures for structural annotation of LC/HRMS features and their further prioritization. Candidate structures are commonly retrieved based on the tandem mass spectral information either from spectral or structural databases; however, the vast majority of the detected LC/HRMS features remain unannotated, constituting what we refer to as a part of the unknown chemical space. Recently, the exploration of this chemical space has become accessible through generative models. Furthermore, the evaluation of the candidate structures benefits from the complementary empirical analytical information such as retention time, collision cross section values, and ionization type. In this critical review, we provide an overview of the current approaches for retrieving and prioritizing candidate structures. These approaches come with their own set of advantages and limitations, as we showcase in the example of structural annotation of ten known and ten unknown LC/HRMS features. We emphasize that these limitations stem from both experimental and computational considerations. Finally, we highlight three key considerations for the future development of in silico methods."
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
  pubs.forEach(pub => {
    html.push(`
      <div style="margin-bottom: 30px; border-bottom: 1px solid #ccc; padding-bottom: 20px;">
        <h4><a href="${pub.url}" target="_blank">${pub.title}</a></h4>
        <p><strong>Authors:</strong> ${pub.authors}</p>
        <p><strong>Journal:</strong> ${pub.journal}</p>
        <img src="${pub.toc}" alt="TOC Graphic" style="max-width: 100%; margin: 10px 0;">
        <p><strong>Abstract:</strong> ${pub.abstract}</p>
      </div>
    `);
  });

  container.innerHTML = html.join("");
}

// Initial load
renderYears();
const defaultYear = publications[currentYear] ? currentYear : years[0];
showPublications(defaultYear);
</script>
