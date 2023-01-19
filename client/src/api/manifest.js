const manifest_properties = {
  all: {
    name: 'All',
    command: 'all',
    property: '',
    description: 'The traditional concept of a web application is a software \
                  that runs on a web server.\
                  Web App here though is scoped only on the installed \
                  application from the broswer or platform stores.',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  desktopPwa: {
    name: 'Desktop PWA',
    command: 'desktopPwa',
    property: '',
    description: 'PWA (Progressive Web App) is a new way of browser experience \
                  that gives native app behavior in any platforms. \
                  PWA is based on the developer provided \
                  manifest that can give extra features such as \
                  file, protocol handlers, share target, etc. \
                  \
                  see Web App manifest for further information. \
                  https://www.w3.org/TR/appmanifest/',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  installedSite: {
    name: 'Installed Sites',
    command: 'installedSite',
    property: '',
    description: 'Installed Site description',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  windowsStore: {
    name: 'Windows Store',
    command: 'windowsStore',
    property: '',
    description: 'Windows Store description',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  default: {
    name: 'Any (default)',
    command: 'default',
    property: '',
    description: 'Web App is a new way of browser experience that \
                  gives native app behavior in any platforms. \
                  <b/> \
                  The video gives general explanation of PWA and \
                  Installed Site. PWA is based on the developer provided \
                  manifest that can give more extra features such as \
                  file, protocol handlers, share target, etc. \
                  \
                  see Web App manifest for further information. \
                  https://www.w3.org/TR/appmanifest/',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU',
  },
  fileHandlers: {
    name: 'File Handlers',
    command: 'desktopPwa',
    property: 'fileHandlers',
    description: 'The installed PWA could handle file type based activation. \
                  for example, if the PWA manifest specify the file type extension \
                  that it can handle, then the app will be started with given file path \
                  when user click the file. \
                  The further explanation is in \
                  the https://web.dev/file-handling/',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  protocolHandlers: {
    name: 'Protocol Handlers',
    command: 'desktopPwa',
    property: 'protocolHandlers',
    description: ' Protocol Handlers Description ',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  relatedApplications: {
    name: 'Related Applications',
    command: 'desktopPwa',
    property: 'relatedApplications',
    description: 'Related Applications description',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  sharetarget: {
    name: 'ShareTarget',
    command: 'desktopPwa',
    property: 'sharetarget',
    description: 'Share target is the application feature that allows PWA to \
                  accept shared contents such as text, url, even files from other \
                  native apps as well as browser or other PWA.\
                  see the detailed \
                  The further explanation is in \
                  https://web.dev/web-share-target.',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  shortcutMenu: {
    name: 'shortcutMenu',
    command: 'desktopPwa',
    property: 'shortcutMenu',
    description: 'shortcutMenu descritpion',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
  windowOverly: {
    name: 'Window Overlay',
    command: 'desktopPwa',
    property: 'windowOverlay',
    description: '',
    video: 'https://www.youtube.com/embed/0T3B5BFCurU' // TODO: create youtube and link it.
  },
}

export {
  manifest_properties
}
