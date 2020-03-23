import React from 'react'
// import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapWrapper = styled.section`
  height: 600px;
`

// const MarpMarker = ({ text }) => <div>{text}</div>

// class MapSection extends React.Component {
//   static defaultProps = {
//     center: {
//       lat: 28.0185972,
//       lng: -82.7648962,
//     },
//     zoom: 19,
//   }

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: '' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <MarpMarker lat={28.0185972} lng={-82.7648962} text="My Marker" />
//         </GoogleMapReact>
//       </div>
//     )
//   }
// }

const MapSection = () => (
  <MapWrapper
    dangerouslySetInnerHTML={{
      __html:
        '<iframe src="https://snazzymaps.com/embed/165265" width="100%" height="100%" style="border:none;"></iframe>',
    }}
  />
)

// const MapSection = () => (
//   <MapWrapper
//     dangerouslySetInnerHTML={{
//       __html:
//         '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.5755921474505!2d-82.76493676525244!3d28.018890996201097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f2289d656f23%3A0x24755270aa3d506!2sDunkin&#39;!5e0!3m2!1sen!2sro!4v1564645865890!5m2!1sen!2sro" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>',
//     }}
//   />
// )

export default MapSection
