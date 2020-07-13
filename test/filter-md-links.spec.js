const mdLinks = require('../src/filter-md-links');

const mockLinks = [
  [{
    text: "Google Keep",
    link: "https://keep.google.com/",
    file: "/home/thalita/Documentos/SAP004-md-links/teste/teste.md"
  },
  {
    text: "Twitter",
    link: "https://twitter.com/",
    file: "/home/thalita/Documentos/SAP004-md-links/teste/teste.md"
  },
  {
    text: "Letrux",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_kDIgAxQnIjnrAnTbHSwPAhuaP1Nwgy-DQ",
    file: "/home/thalita/Documentos/SAP004-md-links/teste/teste.md"
  }]
]

describe('mdLinks', () => {

  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function')
  });

  it('should return a list with text, link and path', () => {
    return expect(mdLinks('/home/thalita/Documentos/SAP004-md-links/teste/')).resolves.toEqual(mockLinks);
  })

  it('should show an error message when the return is an empty array', () => {
    mdLinks().catch((err) => {
      expect(err).rejects.toEqual("We did not found any files.")
    })
  })

});
