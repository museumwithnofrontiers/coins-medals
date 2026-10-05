import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'coins',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'We suggest you start your visit in the',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'd3cd72eb-4da3-52ee-8fe8-e450b2d00a90',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'c390c585-bede-5ad5-9758-01796227dd08',
    dynasty: {
      item: 'c390c585-bede-5ad5-9758-01796227dd08',
      name: 'Umayyads',
    },
    timeline: {
      code: 'lb',
      id: 'lbn',
      country: 'Lebanon',
      rows: 14,
      event: 'Jamal Pasha initiates a blockade',
      gallery: 5,
      galleryTiles: 5,
      galleryItem: '25 Syrian Piastres',
    },
    partner: {
      id: 'a3753de5-842a-5f0b-a8c7-50bb2e312ce6',
      name: 'Kunsthistorisches Museum',
      city: 'Vienna',
      country: 'Austria',
      objects: 7,
    },
  },
})
