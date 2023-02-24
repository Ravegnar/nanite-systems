import IMenuItems from '@/types/MenuItems@types'

const menuItems: IMenuItems[] = [
  {
    key: 'aboutUs',
    tabId: null,
    name: 'nav.aboutCompany',
    hashScroll: 'aboutUs',
  },
  {
    key: 'services',
    tabId: null,
    name: 'nav.services',
    hashScroll: 'services',
  },
  {
    key: 'ourJob',
    tabId: null,
    name: 'nav.ourJob',
    hashScroll: 'ourJob',
  },
  {
    key: 'reference',
    tabId: 'reference',
    name: 'nav.reference',
    hashScroll: 'callUs',
  },
  {
    key: 'career',
    tabId: 'career',
    name: 'nav.career',
    hashScroll: 'callUs',
  },
  {
    key: 'contacts',
    tabId: 'contacts',
    name: 'nav.contacts',
    hashScroll: 'callUs',
  },
]

export default menuItems