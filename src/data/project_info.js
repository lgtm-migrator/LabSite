import Hyphyimg from './images/projects/Hyphy.jpeg';
import Visionimg from './images/projects/Vision.jpeg';
import Galaxyimg from './images/projects/Galaxy.jpeg';
import Traceimg from './images/projects/Trace.jpeg';
import Datamonkeyimg from './images/projects/Datamonkey.jpeg';
import Phylotreeimg from './images/projects/Phylotree.jpeg';
import Alignmentimg from './images/projects/Alignment.jpeg';
import Hivngsimg from './images/projects/HIVNGS.jpeg';


export default {
  "HyPhy": {
    "name": "HyPhy",
    "shortDescription": "Hypothesis Testing with Phyloginies",
    "longDescription": "Open-source software package for the analysis of genetic sequences using techniques in phylogenetics, molecular evolution, and machine learning; features a rich scripting language for limitless customization of analyses; over 10,000 registered users and over 2,000 citations in peer-reviewed publications",
    "image": Hyphyimg,
    "tag": "major",
    "links": {
      "website": "http://hyphy.org",
      "github": "https://github.com/veg/hyphy",
      "paper": "https://link.springer.com/chapter/10.1007%2F0-387-27733-1_6" 
    }
  },
  "Datamonkey": {
    "name": "Datamonkey.org",
    "shortDescription": "Run state-of-the-art statistical models through the comfort of your browser",
    "longDescription": "High-performance computing web-server for analyzing evolutionary signatures in sequence data; receives an average of 10,000 page views per day; has conservatively contributed $500,000 of compute time to the global research community",
    "image": Datamonkeyimg,
    "tag": "major",
    "links": {
      "website": "https://datamonkey.org",
      "github": "https://github.com/veg/datamonkey-js",
      "paper": "https://academic.oup.com/mbe/article-abstract/35/3/773/4782511?redirectedFrom=PDF"
    }
  },
  "HIV-TRACE": {
    "name": "HIV-TRACE",
    "shortDescription": "Identify Transmision Clusters",
    "longDescription": "Tool for large scale molecular epidemiology of HIV-1 and other rapidly evolving pathogens; currently in use by the Centers for Disease Control (CDC) for monitoring HIV transmission clusters throughout the US",
    "image": Traceimg,
    "tag": "major",
    "links": {
      "website": "https://veg.github.io/hivtrace-viz/",
      "github": "https://github.com/veg/hivtrace",
      "paper": "https://academic.oup.com/mbe/advance-article-abstract/doi/10.1093/molbev/msy016/4833215?redirectedFrom=fulltext"
    }
  },
  "Phylotree.js": {
    "name": "Phylotree.js",
    "shortDescription": "Javascript library for working with phylogenetic trees",
    "longDescription": "Library suitable for use in any Javascript application whose users need to view and interact with phylogenetic trees; prioritizes abstractions over features, and comes with a documented application programming interface promoting flexibility and extensibility",
    "image": Phylotreeimg,
    "tag": "major",
    "links": {
      "website": "http://phylotree.hyphy.org/",
      "github": "https://github.com/veg/phylotree.js",
    }
  },
  "galaxy.hyphy.org": {
    "name": "galaxy.hyphy.org",
    "shortDescription": "High throughput genomic tools for galaxy",
    "longDescription": "Galaxy Project server assembling HIV NGS tools into “data to answer” workflows and creating solutions for HIV/AIDS researchers needing to perform analyses of NGS data; server is hosted by the Pond Lab in collaboration with the Lab of Anton Nekrutenko at Penn State and the Lab of James Taylor at Johns Hopkins",
    "image": Galaxyimg,
    "tag": "major",
    "links": {
      "website": "https://galaxy.hyphy.org",
      "github": "https://github.com/veg/tools-iuc"
    }
  },
  "HyPhy-Vision": {
    "name": "HyPhy-Vision",
    "shortDescription": "Visualize HyPhy results",
    "longDescription": "Open-source software package for visualizing and interpreting JSON results generated by HyPhy",
    "image": Visionimg,
    "tag": "minor",
    "links": {
      "website": "https://vision.hyphy.org",
      "github": "https://github.com/veg/hyphy-vision",
      "paper": "https://www.ncbi.nlm.nih.gov/pubmed/29401317"
    }
  },
  "Bcell-Phylo": {
    "name": "Bcell-Phylo",
    "shortDescription": "Build phylogenetic trees from anti-body data",
    "longDescription": "Build phylogenetic trees from anti-body data",
    "tag": "minor",
    "links": {
      "github": "https://github.com/veg/bcell-phylo"
    }
  },
  "FLEA": {
    "name": "FLEA",
    "shortDescription": "Full-Length Envelope Analyzer (FLEA): A tool for longitudinal analysis of viral amplicons",
    "longDescription": "Full-Length Envelope Analyzer (FLEA): A tool for longitudinal analysis of viral amplicons",
    "tag": "minor",
    "links": {
      "website": "http://datamonkey.org/flea",
      "github": "https://github.com/veg/flea-pipeline",
      "paper": "https://www.biorxiv.org/content/early/2017/12/07/230474"
    }
  },
  "alignment.js": {
    "name": "alignment.js",
    "shortDescription": "Javascript Alignment Viewer",
    "longDescription": "Library for viwing multiple sequence alignments built with extensibility in mind",
    "image": Alignmentimg,
    "tag": "minor",
    "links": {
      "github": "https://github.com/stephenshank/alignment.js",
      "website": "http://jsav.hyphy.org/"
    }
  },
  "HIV-NGS": {
    "name": "HIV NGS",
    "shortDescription": "HIV NGS Processing Pipeline",
    "longDescription": "Processing pipeline for HIV NGS data including evaluation of intra-host evolution",
    "image": Hivngsimg,
    "tag": "minor",
    "links": {
      "github": "https://github.com/veg/HIV-NGS",
      "website": "http://octamonkey.datamonkey.org/ngs/"
    }
  },
  "mmvc": {
    "name": "mmvc",
    "shortDescription": "Multinomial mixture variant caller",
    "longDescription": "Multinomial mixture variant caller",
    "tag": "minor",
    "links": {
      "github": "https://github.com/veg/mmvc"
    }
  },
  "TN93": {
    "name": "TN93",
    "shortDescription": "TN93 fast distance calculator",
    "longDescription": "Simple program to compute pairwise distances between aligned nucleotide sequences using the Tamura Nei 93 distance",
    "tag": "minor",
    "links": {
      "github": "https://github.com/veg/tn93"
    }
  },
}
