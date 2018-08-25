import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    font: [{ unit: 'px', value: 400 }, { unit: 'px', value: 15 }, { unit: 'string', value: 'Lato,' }, { unit: 'string', value: 'sans-serif' }],
    lineHeight: [{ unit: 'px', value: 1.8 }],
    color: '#818181'
  },
  h2: {
    fontSize: [{ unit: 'px', value: 24 }],
    textTransform: 'uppercase',
    color: '#303030',
    fontWeight: '600',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  h4: {
    fontSize: [{ unit: 'px', value: 19 }],
    lineHeight: [{ unit: 'em', value: 1.375 }],
    color: '#303030',
    fontWeight: '400',
    marginBottom: [{ unit: 'px', value: 30 }]
  },
  navbar: {
    marginBottom: [{ unit: 'px', value: 0 }],
    backgroundColor: '#009688',
    // cor prymatia
    zIndex: '9999',
    border: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 15 }, { unit: 'string', value: '!important' }],
    lineHeight: [{ unit: 'px', value: 1.42857143 }, { unit: 'string', value: '!important' }],
    letterSpacing: [{ unit: 'px', value: 4 }],
    borderRadius: '0',
    fontFamily: 'Montserrat, sans-serif',
    opacity: '0.8'
  },
  'navbar li a': {
    color: '#fff !important'
  },
  'navbar navbar-brand': {
    color: '#fff !important'
  },
  'navbar-nav li a:hover': {
    color: '#009688  !important',
    // cor prymatia
    backgroundColor: '#fff !important'
  },
  'navbar-nav liactive a': {
    color: '#009688  !important',
    // cor prymatia
    backgroundColor: '#fff !important'
  },
  'navbar-default navbar-toggle': {
    borderColor: '"transparent"',
    color: '#fff !important'
  },
  'logo-small': {
    color: '#009688',
    // cor prymatia
    fontSize: [{ unit: 'px', value: 50 }]
  },
  logo: {
    color: '#009688',
    // cor prymatia
    fontSize: [{ unit: 'px', value: 30 }]
  },
  jumbotron: {
    backgroundColor: '#009688',
    // cor prymatia
    color: '#fff',
    padding: [{ unit: 'px', value: 100 }, { unit: 'px', value: 25 }, { unit: 'px', value: 100 }, { unit: 'px', value: 25 }],
    fontFamily: 'Montserrat, sans-serif'
  },
  'header-image': {
    // -webkit-filter:grayscale(90%); cor tom de sinza
    // filter:grayscale(90); cor tom de sinza
    width: [{ unit: '%H', value: 1 }]
  },
  'carousel-inner': {
    width: [{ unit: '%H', value: 1 }],
    marginBottom: [{ unit: 'px', value: 10 }]
  },
  'container-fluid': {
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 20 }, { unit: 'px', value: 30 }, { unit: 'px', value: 20 }],
    marginTop: [{ unit: 'px', value: 20 }]
  },
  'bg-grey': {
    backgroundColor: '#f6f6f6'
  },
  thumbnail: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'string', value: 'none' }],
    borderRadius: '0'
  },
  'item h4': {
    fontSize: [{ unit: 'px', value: 19 }],
    lineHeight: [{ unit: 'em', value: 1.375 }],
    fontWeight: '400',
    fontStyle: 'italic',
    margin: [{ unit: 'px', value: 70 }, { unit: 'px', value: 0 }, { unit: 'px', value: 70 }, { unit: 'px', value: 0 }]
  },
  'item span': {
    fontStyle: 'normal'
  },
  panel: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#009688' }],
    // cor prymatia
    borderRadius: '0 !important',
    transition: 'box-shadow 0.5s'
  },
  textfooter: {
    color: '#fff'
  },
  linkfooter: {
    color: '#FF9800'
  },
  'container-footer': {
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }],
    backgroundColor: '#009688'
  },
  panel: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#009688' }],
    // cor prymatia
    borderRadius: '0 !important',
    transition: 'box-shadow 0.5s'
  },
  'panel-footer btn:hover': {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#009688' }],
    // cor prymatia
    backgroundColor: '#fff !important',
    color: '#009688',
    // cor prymatia
  },
  'panel-heading': {
    color: '#fff !important',
    backgroundColor: '#009688  !important',
    // cor prymatia
    padding: [{ unit: 'px', value: 25 }, { unit: 'px', value: 25 }, { unit: 'px', value: 25 }, { unit: 'px', value: 25 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  },
  'panel-footer': {
    backgroundColor: 'white !important'
  },
  'panel-footer h3': {
    fontSize: [{ unit: 'px', value: 32 }]
  },
  'panel-footer h4': {
    color: '#aaa',
    fontSize: [{ unit: 'px', value: 10 }]
  },
  'panel-footer btn': {
    margin: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    backgroundColor: '#009688',
    // cor prymatia
    color: '#fff'
  }
});
